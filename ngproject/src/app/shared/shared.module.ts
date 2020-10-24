import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbdDatepickerRangePopup } from './components/datepicker-range-popup/datepicker-range-popup';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ NgbdDatepickerRangePopup ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    NgbdDatepickerRangePopup
  ]
})
export class SharedModule { }
