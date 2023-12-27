import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapTagComponent } from './map-tag.component';

describe('MapTagComponent', () => {
  let component: MapTagComponent;
  let fixture: ComponentFixture<MapTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapTagComponent]
    });
    fixture = TestBed.createComponent(MapTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
