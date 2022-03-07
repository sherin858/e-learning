import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowteachersComponent } from './adminshowteachers.component';

describe('AdminshowteachersComponent', () => {
  let component: AdminshowteachersComponent;
  let fixture: ComponentFixture<AdminshowteachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminshowteachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowteachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
