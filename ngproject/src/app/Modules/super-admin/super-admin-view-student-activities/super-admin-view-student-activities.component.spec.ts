import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminViewStudentActivitiesComponent } from './super-admin-view-student-activities.component';

describe('SuperAdminViewStudentActivitiesComponent', () => {
  let component: SuperAdminViewStudentActivitiesComponent;
  let fixture: ComponentFixture<SuperAdminViewStudentActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminViewStudentActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminViewStudentActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
