import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminNodataStudentComponent } from './super-admin-nodata-student.component';

describe('SuperAdminNodataStudentComponent', () => {
  let component: SuperAdminNodataStudentComponent;
  let fixture: ComponentFixture<SuperAdminNodataStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminNodataStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminNodataStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
