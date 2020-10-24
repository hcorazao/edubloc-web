import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { ParentsViewStudentRoutingModule } from './parents-view-student-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { ParentsViewStudentComponent } from './parents-view-student.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    ParentsViewStudentComponent
  ],
  imports: [
    CommonModule,
    ParentsViewStudentRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    ParentsViewStudentComponent
  ],
  providers: [],
  bootstrap: [ParentsViewStudentComponent]
})
export class ParentsViewStudentModule { }
