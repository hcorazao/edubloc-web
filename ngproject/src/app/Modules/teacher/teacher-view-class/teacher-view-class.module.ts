import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { TeacherViewClassRoutingModule } from './teacher-view-class-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { TeacherViewClassComponent } from './teacher-view-class.component';
import { NgbdDatepickerRangePopupModule } from '../../../components/datepicker-range-popup/datapicker-range-popup.module';


@NgModule({
  declarations: [
    TeacherViewClassComponent
  ],
  imports: [
    CommonModule,
    TeacherViewClassRoutingModule,
    FontAwesomeModule,
    NgbdDatepickerRangePopupModule
  ],
  exports: [
    TeacherViewClassComponent
  ],
  providers: [],
  bootstrap: [TeacherViewClassComponent]
})
export class TeacherViewClassModule { }
