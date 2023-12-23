import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HappyCustomerTagComponent } from './happy-customer-tag.component';

describe('HappyCustomerTagComponent', () => {
  let component: HappyCustomerTagComponent;
  let fixture: ComponentFixture<HappyCustomerTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HappyCustomerTagComponent]
    });
    fixture = TestBed.createComponent(HappyCustomerTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
