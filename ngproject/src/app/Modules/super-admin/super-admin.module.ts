import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { SUPER_ADMIN_ROUTING } from './super-admin.routes';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { SuperAdminViewStudentComponent } from './super-admin-view-student/super-admin-view-student.component';


@NgModule({
  declarations: [
    SuperAdminComponent,
    SuperAdminViewStudentComponent,
  ],
  imports: [
    BrowserModule,
    SuperAdminRoutingModule,
    SUPER_ADMIN_ROUTING,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [SuperAdminComponent]
})
export class SuperAdminModule { }
