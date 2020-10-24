import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { TeacherPastClassListRoutingModule } from './teacher-past-class-list-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { TeacherPastClassListComponent } from './teacher-past-class-list.component';


@NgModule({
  declarations: [
    TeacherPastClassListComponent
  ],
  imports: [
    CommonModule,
    TeacherPastClassListRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    TeacherPastClassListComponent
  ],
  providers: [],
  bootstrap: [TeacherPastClassListComponent]
})
export class TeacherPastClassListModule { }
