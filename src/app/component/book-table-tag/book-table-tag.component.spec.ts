import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookTableTagComponent } from './book-table-tag.component';

describe('BookTableTagComponent', () => {
  let component: BookTableTagComponent;
  let fixture: ComponentFixture<BookTableTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookTableTagComponent]
    });
    fixture = TestBed.createComponent(BookTableTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
