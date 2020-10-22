import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { SuperAdminViewStudentActivitiesRoutingModule } from './super-admin-view-student-activities-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SuperAdminViewStudentActivitiesComponent } from './super-admin-view-student-activities.component';
import { NgbdDatepickerRangePopupModule } from '../../../components/datepicker-range-popup/datapicker-range-popup.module';


@NgModule({
  declarations: [
    SuperAdminViewStudentActivitiesComponent
  ],
  imports: [
    CommonModule,
    SuperAdminViewStudentActivitiesRoutingModule,
    FontAwesomeModule,
    NgbdDatepickerRangePopupModule
  ],
  exports: [
    SuperAdminViewStudentActivitiesComponent
  ],
  providers: [],
  bootstrap: [SuperAdminViewStudentActivitiesComponent]
})
export class SuperAdminViewStudentActivitiesModule { }
