import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Rutas

// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { NgbdDatepickerRangePopup } from './datepicker-range-popup';

@NgModule({
  declarations: [
    NgbdDatepickerRangePopup
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule
  ],
  exports: [
    NgbdDatepickerRangePopup
  ],
  providers: [],
  bootstrap: [
    NgbdDatepickerRangePopup
  ]
})
export class NgbdDatepickerRangePopupModule {
  static then(arg0: (ref: any) => void) {
    throw new Error('Method not implemented.');
  }
}

