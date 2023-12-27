import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormTagComponent } from './contact-form-tag.component';

describe('ContactFormTagComponent', () => {
  let component: ContactFormTagComponent;
  let fixture: ComponentFixture<ContactFormTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactFormTagComponent]
    });
    fixture = TestBed.createComponent(ContactFormTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
