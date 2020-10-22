import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdDatepickerRangePopup } from './datepicker-range-popup';

describe('DatepickerRangePopupComponent', () => {
  let component: NgbdDatepickerRangePopup;
  let fixture: ComponentFixture<NgbdDatepickerRangePopup>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgbdDatepickerRangePopup ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdDatepickerRangePopup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
