import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { SuperAdminClassroomsRoutingModule } from './super-admin-classrooms-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SuperAdminClassroomsComponent } from './super-admin-classrooms.component';


@NgModule({
  declarations: [
    SuperAdminClassroomsComponent
  ],
  imports: [
    CommonModule,
    SuperAdminClassroomsRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    SuperAdminClassroomsComponent
  ],
  providers: [],
  bootstrap: [SuperAdminClassroomsComponent]
})
export class SuperAdminClassroomsModule { }
