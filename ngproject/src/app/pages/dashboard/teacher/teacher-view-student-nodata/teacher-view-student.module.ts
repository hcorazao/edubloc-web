import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { TeacherViewStudentNodataRoutingModule } from './teacher-view-student-nodata-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { TeacherViewStudentNodataComponent } from './teacher-view-student-nodata.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    TeacherViewStudentNodataComponent
  ],
  imports: [
    CommonModule,
    TeacherViewStudentNodataRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    TeacherViewStudentNodataComponent
  ],
  providers: [],
  bootstrap: [TeacherViewStudentNodataComponent]
})
export class TeacherViewStudentNodataModule { }
