import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { SuperAdminViewStudentRoutingModule } from './super-admin-view-student-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SuperAdminViewStudentComponent } from './super-admin-view-student.component';


@NgModule({
  declarations: [
    SuperAdminViewStudentComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SuperAdminViewStudentRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    SuperAdminViewStudentComponent
  ],
  providers: [],
  bootstrap: [SuperAdminViewStudentComponent]
})
export class SuperAdminViewStudentModule { }
