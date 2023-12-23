import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterChefTagComponent } from './master-chef-tag.component';

describe('MasterChefTagComponent', () => {
  let component: MasterChefTagComponent;
  let fixture: ComponentFixture<MasterChefTagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MasterChefTagComponent]
    });
    fixture = TestBed.createComponent(MasterChefTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
