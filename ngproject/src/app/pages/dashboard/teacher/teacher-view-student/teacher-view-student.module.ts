import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { TeacherViewStudentRoutingModule } from './teacher-view-student-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { TeacherViewStudentComponent } from './teacher-view-student.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    TeacherViewStudentComponent
  ],
  imports: [
    CommonModule,
    TeacherViewStudentRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    TeacherViewStudentComponent
  ],
  providers: [],
  bootstrap: [TeacherViewStudentComponent]
})
export class TeacherViewStudentModule { }
