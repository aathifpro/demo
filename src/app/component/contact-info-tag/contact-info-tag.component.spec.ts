import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactInfoTagComponent } from './contact-info-tag.component';

describe('ContactInfoTagComponent', () => {
  let component: ContactInfoTagComponent;
  let fixture: ComponentFixture<ContactInfoTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactInfoTagComponent]
    });
    fixture = TestBed.createComponent(ContactInfoTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
