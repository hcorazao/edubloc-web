import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { SuperAdminViewStudentActivitiesRoutingModule } from './super-admin-view-student-activities-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SuperAdminViewStudentActivitiesComponent } from './super-admin-view-student-activities.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    SuperAdminViewStudentActivitiesComponent
  ],
  imports: [
    CommonModule,
    SuperAdminViewStudentActivitiesRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    SuperAdminViewStudentActivitiesComponent
  ],
  providers: [],
  bootstrap: [SuperAdminViewStudentActivitiesComponent]
})
export class SuperAdminViewStudentActivitiesModule { }
