import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleProductTagComponent } from './single-product-tag.component';

describe('SingleProductTagComponent', () => {
  let component: SingleProductTagComponent;
  let fixture: ComponentFixture<SingleProductTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SingleProductTagComponent]
    });
    fixture = TestBed.createComponent(SingleProductTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
