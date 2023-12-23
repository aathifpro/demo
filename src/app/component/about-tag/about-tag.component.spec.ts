import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTagComponent } from './about-tag.component';

describe('AboutTagComponent', () => {
  let component: AboutTagComponent;
  let fixture: ComponentFixture<AboutTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTagComponent]
    });
    fixture = TestBed.createComponent(AboutTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
