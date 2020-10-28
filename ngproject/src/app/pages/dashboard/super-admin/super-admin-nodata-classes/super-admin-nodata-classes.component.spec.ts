import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperAdminNodataClassesComponent } from './super-admin-nodata-classes.component';

describe('SuperAdminNodataClassesComponent', () => {
  let component: SuperAdminNodataClassesComponent;
  let fixture: ComponentFixture<SuperAdminNodataClassesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperAdminNodataClassesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperAdminNodataClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
