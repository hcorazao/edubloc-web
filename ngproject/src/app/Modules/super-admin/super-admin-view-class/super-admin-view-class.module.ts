import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { SuperAdminViewClassRoutingModule } from './super-admin-view-class-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SuperAdminViewClassComponent } from './super-admin-view-class.component';


@NgModule({
  declarations: [
    SuperAdminViewClassComponent
  ],
  imports: [
    CommonModule,
    SuperAdminViewClassRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    SuperAdminViewClassComponent
  ],
  providers: [],
  bootstrap: [SuperAdminViewClassComponent]
})
export class SuperAdminViewClassModule { }
