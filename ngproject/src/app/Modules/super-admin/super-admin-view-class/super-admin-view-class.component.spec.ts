import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminViewClassComponent } from './super-admin-view-class.component';

describe('SuperAdminViewClassComponent', () => {
  let component: SuperAdminViewClassComponent;
  let fixture: ComponentFixture<SuperAdminViewClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminViewClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminViewClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
