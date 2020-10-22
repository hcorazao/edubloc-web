import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { TeacherViewStudentRoutingModule } from './teacher-view-student-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { TeacherViewStudentComponent } from './teacher-view-student.component';
import { NgbdDatepickerRangePopupModule } from '../../../components/datepicker-range-popup/datapicker-range-popup.module';


@NgModule({
  declarations: [
    TeacherViewStudentComponent
  ],
  imports: [
    CommonModule,
    TeacherViewStudentRoutingModule,
    FontAwesomeModule,
    NgbdDatepickerRangePopupModule
  ],
  exports: [
    TeacherViewStudentComponent
  ],
  providers: [],
  bootstrap: [TeacherViewStudentComponent]
})
export class TeacherViewStudentModule { }
