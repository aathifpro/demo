import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogScreenComponent } from './blog-screen.component';

describe('BlogScreenComponent', () => {
  let component: BlogScreenComponent;
  let fixture: ComponentFixture<BlogScreenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogScreenComponent]
    });
    fixture = TestBed.createComponent(BlogScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
