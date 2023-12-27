import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceTagComponent } from './experience-tag.component';

describe('ExperienceTagComponent', () => {
  let component: ExperienceTagComponent;
  let fixture: ComponentFixture<ExperienceTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceTagComponent]
    });
    fixture = TestBed.createComponent(ExperienceTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
