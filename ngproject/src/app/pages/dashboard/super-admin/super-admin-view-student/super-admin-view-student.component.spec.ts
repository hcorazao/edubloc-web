import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminViewStudentComponent } from './dashboard/super-admin-view-student.component';

describe('StudentComponent', () => {
  let component: SuperAdminViewStudentComponent;
  let fixture: ComponentFixture<SuperAdminViewStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminViewStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
