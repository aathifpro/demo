import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTagComponent } from './menu-tag.component';

describe('MenuTagComponent', () => {
  let component: MenuTagComponent;
  let fixture: ComponentFixture<MenuTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuTagComponent]
    });
    fixture = TestBed.createComponent(MenuTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
