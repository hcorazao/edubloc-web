import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminClassroomsComponent } from './super-admin-classrooms.component';

describe('SuperAdminClassroomsComponent', () => {
  let component: SuperAdminClassroomsComponent;
  let fixture: ComponentFixture<SuperAdminClassroomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminClassroomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminClassroomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
