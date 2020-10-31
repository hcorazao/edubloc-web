import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { ParentsViewStudentNodataRoutingModule } from './parents-view-student-nodata-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { ParentsViewStudentNodataComponent } from './parents-view-student-nodata.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    ParentsViewStudentNodataComponent
  ],
  imports: [
    CommonModule,
    ParentsViewStudentNodataRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    ParentsViewStudentNodataComponent
  ],
  providers: [],
  bootstrap: [ParentsViewStudentNodataComponent]
})
export class ParentsViewStudentNodataModule { }
