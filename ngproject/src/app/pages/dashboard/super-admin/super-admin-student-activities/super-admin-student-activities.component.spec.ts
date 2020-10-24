import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminStudentActivitiesComponent } from './super-admin-student-activities.component';

describe('SuperAdminStudentActivitiesComponent', () => {
  let component: SuperAdminStudentActivitiesComponent;
  let fixture: ComponentFixture<SuperAdminStudentActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminStudentActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminStudentActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
