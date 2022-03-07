import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersinglecourseComponent } from './teachersinglecourse.component';

describe('TeachersinglecourseComponent', () => {
  let component: TeachersinglecourseComponent;
  let fixture: ComponentFixture<TeachersinglecourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeachersinglecourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachersinglecourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
