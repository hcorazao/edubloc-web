import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { SuperAdminNodataStudentRoutingModule } from './super-admin-nodata-student-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SuperAdminNodataStudentComponent } from './super-admin-nodata-student.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    SuperAdminNodataStudentComponent
  ],
  imports: [
    CommonModule,
    SuperAdminNodataStudentRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    SuperAdminNodataStudentComponent
  ],
  providers: [],
  bootstrap: [SuperAdminNodataStudentComponent]
})
export class SuperAdminNodataStudentModule { }