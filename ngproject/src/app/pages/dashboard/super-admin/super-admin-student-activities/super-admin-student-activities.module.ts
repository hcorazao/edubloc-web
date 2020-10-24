import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { SuperAdminStudentActivitiesRoutingModule } from './super-admin-student-activites-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SuperAdminStudentActivitiesComponent } from './super-admin-student-activities.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    SuperAdminStudentActivitiesComponent
  ],
  imports: [
    CommonModule,
    SuperAdminStudentActivitiesRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    SuperAdminStudentActivitiesComponent
  ],
  providers: [],
  bootstrap: [SuperAdminStudentActivitiesComponent]
})
export class SuperAdminStudentActivitiesModule { }
