import { Component, OnInit } from '@angular/core';
import { PointOfInterest } from 'src/app/models/poi.interface';
import { PoiService } from 'src/app/services/poi.service';


@Component({
  selector: 'app-poi-list-page',
  templateUrl: './poi-list-page.component.html',
  styleUrls: ['./poi-list-page.component.css']
})
export class PoiListPageComponent implements OnInit {

  loading = false;
  showError = false;

  currentPage = 1;
  itemsPerPage = 15;

  pointsOfInterest: PointOfInterest[] = [];

  sortField: keyof PointOfInterest | null = null;
  sortDirections: { [key: string]: 'asc' | 'desc' | null } = {};

  searchTerm: string = '';

  filteredPointsOfInterest: PointOfInterest[] = [];

  constructor(
    private poiService: PoiService
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.loading = true;
    this.poiService.list().subscribe({
      next: (result: PointOfInterest[]) => {
        this.pointsOfInterest = result;
        this.filteredPointsOfInterest = this.pointsOfInterest;
        this.sortItems();
        this.loading = false;
      },
      error: error => {
        console.error(error);
        this.showError = true;
        this.loading = false;
      }
    });
  }

  sortItems(): void {
    if (this.sortField) {
      this.filteredPointsOfInterest.sort(this.compare);
    }
  }

  get currentItems(): PointOfInterest[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    return this.filteredPointsOfInterest.slice(startIndex, startIndex + this.itemsPerPage);
  }

  nextPage(): void {
    if (this.itemsPerPage * this.currentPage < this.filteredPointsOfInterest.length) {
      this.currentPage++;
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredPointsOfInterest.length / this.itemsPerPage);
  }

  sortBy(field: string) {
    this.sortField = field as keyof PointOfInterest;

    if (this.sortDirections[field] === 'asc') {
      this.sortDirections[field] = 'desc';
    } else {
      this.sortDirections[field] = 'asc';
    }

    // Set all other fields to null
    for (const key in this.sortDirections) {
      if (key !== field) {
        this.sortDirections[key] = null;
      }
    }

    // re-sort the data without loading
    this.sortItems();
  }

  compare = (a: PointOfInterest, b: PointOfInterest): number => {
    const field = this.sortField;
    if (field) {
      const valueA = this.getValueByPath(a, field);
      const valueB = this.getValueByPath(b, field);

      if (typeof valueA === 'string' && typeof valueB === 'string') {
        return this.sortDirections[field] === 'asc'
          ? valueA.localeCompare(valueB)
          : valueB.localeCompare(valueA);
      }

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return this.sortDirections[field] === 'asc'
          ? valueA - valueB
          : valueB - valueA;
      }
    }
    return 0;
  };


  getValueByPath(object: any, path: string): any {
    return path.split('.').reduce((o, p) => (o || {})[p], object);
  }

  filterItems(): void {
    if (this.searchTerm) {
      this.filteredPointsOfInterest = this.pointsOfInterest.filter(poi =>
        this.searchInObject(poi, this.searchTerm)
      );
    } else {
      this.filteredPointsOfInterest = [...this.pointsOfInterest];
    }
    this.currentPage = 1;
    this.sortItems();
  }

  searchInObject(obj: any, term: string): boolean {
    if (typeof obj === 'string') {
      return obj.toLowerCase().includes(term.toLowerCase());
    }

    if (typeof obj === 'number') {
      return obj.toString().includes(term);
    }

    if (obj && typeof obj === 'object') {
      for (let key in obj) {
        if (this.searchInObject(obj[key], term)) {
          return true;
        }
      }
    }

    return false;
  }


}
