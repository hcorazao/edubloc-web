import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Rutas
import { SuperAdminRoutingModule } from './super-admin-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// components


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: []
})
export class SuperAdminModule { }
