import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminaddsubjectComponent } from './adminaddsubject.component';

describe('AdminaddsubjectComponent', () => {
  let component: AdminaddsubjectComponent;
  let fixture: ComponentFixture<AdminaddsubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminaddsubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminaddsubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
