import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentsViewStudentNodataComponent } from './parents-view-student-nodata.component';

describe('ParentsViewStudentNodataComponent', () => {
  let component: ParentsViewStudentNodataComponent;
  let fixture: ComponentFixture<ParentsViewStudentNodataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentsViewStudentNodataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentsViewStudentNodataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
