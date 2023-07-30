import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoiListPageComponent } from './poi-list-page.component';

describe('PoiListPageComponent', () => {
  let component: PoiListPageComponent;
  let fixture: ComponentFixture<PoiListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PoiListPageComponent]
    });
    fixture = TestBed.createComponent(PoiListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
