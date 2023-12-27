import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductScreenComponent } from './single-product-screen.component';

describe('SingleProductScreenComponent', () => {
  let component: SingleProductScreenComponent;
  let fixture: ComponentFixture<SingleProductScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleProductScreenComponent]
    });
    fixture = TestBed.createComponent(SingleProductScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
