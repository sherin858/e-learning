import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacheredittprofileComponent } from './teacheredittprofile.component';

describe('TeacheredittprofileComponent', () => {
  let component: TeacheredittprofileComponent;
  let fixture: ComponentFixture<TeacheredittprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacheredittprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacheredittprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
