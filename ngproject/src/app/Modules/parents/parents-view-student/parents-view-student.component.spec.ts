import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsViewStudentComponent } from './parents-view-student.component';

describe('ParentsComponent', () => {
  let component: ParentsViewStudentComponent;
  let fixture: ComponentFixture<ParentsViewStudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsViewStudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsViewStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
