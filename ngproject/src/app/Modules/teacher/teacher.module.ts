import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Rutas
import { TeacherRoutingModule } from './teacher-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: []
})
export class TeacherModule { }
