import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderListScreenComponent } from './order-list-screen.component';

describe('OrderListScreenComponent', () => {
  let component: OrderListScreenComponent;
  let fixture: ComponentFixture<OrderListScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderListScreenComponent]
    });
    fixture = TestBed.createComponent(OrderListScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
