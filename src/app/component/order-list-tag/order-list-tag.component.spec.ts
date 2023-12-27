import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListTagComponent } from './order-list-tag.component';

describe('OrderListTagComponent', () => {
  let component: OrderListTagComponent;
  let fixture: ComponentFixture<OrderListTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderListTagComponent]
    });
    fixture = TestBed.createComponent(OrderListTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
