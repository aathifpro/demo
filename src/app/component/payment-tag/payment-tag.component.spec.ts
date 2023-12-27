import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentTagComponent } from './payment-tag.component';

describe('PaymentTagComponent', () => {
  let component: PaymentTagComponent;
  let fixture: ComponentFixture<PaymentTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaymentTagComponent]
    });
    fixture = TestBed.createComponent(PaymentTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
