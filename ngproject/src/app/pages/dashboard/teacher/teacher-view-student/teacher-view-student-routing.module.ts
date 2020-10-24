import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherViewStudentComponent } from './teacher-view-student.component';

const routes: Routes = [
  { path: '',
    component: TeacherViewStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherViewStudentRoutingModule { }
