import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacheraddexamComponent } from './teacheraddexam.component';

describe('TeacheraddexamComponent', () => {
  let component: TeacheraddexamComponent;
  let fixture: ComponentFixture<TeacheraddexamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeacheraddexamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacheraddexamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
