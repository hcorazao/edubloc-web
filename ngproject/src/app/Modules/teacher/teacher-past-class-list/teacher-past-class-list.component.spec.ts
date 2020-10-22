import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherPastClassListComponent } from './teacher-past-class-list.component';

describe('TeacherPastClassListComponent', () => {
  let component: TeacherPastClassListComponent;
  let fixture: ComponentFixture<TeacherPastClassListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherPastClassListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherPastClassListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
