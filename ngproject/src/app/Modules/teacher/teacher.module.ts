import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTING } from './teacher.routes';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { TeacherViewStudentComponent } from './teacher-view-student/teacher-view-student.component';


@NgModule({
  declarations: [
    TeacherComponent,
    TeacherViewStudentComponent
  ],
  imports: [
    BrowserModule,
    TeacherRoutingModule,
    APP_ROUTING,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [TeacherComponent]
})
export class TeacherModule { }
