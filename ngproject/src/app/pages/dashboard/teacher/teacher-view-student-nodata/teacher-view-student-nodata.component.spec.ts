import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherViewStudentNodataComponent } from './teacher-view-student-nodata.component';

describe('TeacherViewStudentNodataComponent', () => {
  let component: TeacherViewStudentNodataComponent;
  let fixture: ComponentFixture<TeacherViewStudentNodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeacherViewStudentNodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeacherViewStudentNodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
