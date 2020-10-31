import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherViewStudentNodataComponent } from './teacher-view-student-nodata.component';

const routes: Routes = [
  { path: '',
    component: TeacherViewStudentNodataComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherViewStudentNodataRoutingModule { }
