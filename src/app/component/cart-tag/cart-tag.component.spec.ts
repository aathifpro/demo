import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTagComponent } from './cart-tag.component';

describe('CartTagComponent', () => {
  let component: CartTagComponent;
  let fixture: ComponentFixture<CartTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartTagComponent]
    });
    fixture = TestBed.createComponent(CartTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
