import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowstudentsComponent } from './adminshowstudents.component';

describe('AdminshowstudentsComponent', () => {
  let component: AdminshowstudentsComponent;
  let fixture: ComponentFixture<AdminshowstudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminshowstudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowstudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
