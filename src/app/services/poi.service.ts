import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CommonService } from './common.service';
import { PointOfInterest } from '../models/poi.interface';

@Injectable({
  providedIn: 'root'
})
export class PoiService extends CommonService<PointOfInterest> {
  override apiUrl = environment.apiUrl + '/poi';

  constructor(http: HttpClient) {
    super(http);
  }

}
