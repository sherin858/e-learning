import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowsingleteacherComponent } from './adminshowsingleteacher.component';

describe('AdminshowsingleteacherComponent', () => {
  let component: AdminshowsingleteacherComponent;
  let fixture: ComponentFixture<AdminshowsingleteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminshowsingleteacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowsingleteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
