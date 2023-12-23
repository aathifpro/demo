import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBlogTagComponent } from './recent-blog-tag.component';

describe('RecentBlogTagComponent', () => {
  let component: RecentBlogTagComponent;
  let fixture: ComponentFixture<RecentBlogTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecentBlogTagComponent]
    });
    fixture = TestBed.createComponent(RecentBlogTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
