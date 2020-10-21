import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { TeacherViewStudentRoutingModule } from './teacher-view-student-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { TeacherViewStudentComponent } from './teacher-view-student.component';


@NgModule({
  declarations: [
    TeacherViewStudentComponent
  ],
  imports: [
    CommonModule,
    TeacherViewStudentRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    TeacherViewStudentComponent
  ],
  providers: [],
  bootstrap: [TeacherViewStudentComponent]
})
export class TeacherViewStudentModule { }
