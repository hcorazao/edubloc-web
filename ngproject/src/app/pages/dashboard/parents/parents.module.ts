import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Rutas
import { ParentsRoutingModule } from './parents-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// components


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ParentsRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: []
})
export class ParentsModule { }
