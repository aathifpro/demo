import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CateringServiceTagComponent } from './catering-service-tag.component';

describe('CateringServiceTagComponent', () => {
  let component: CateringServiceTagComponent;
  let fixture: ComponentFixture<CateringServiceTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CateringServiceTagComponent]
    });
    fixture = TestBed.createComponent(CateringServiceTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
