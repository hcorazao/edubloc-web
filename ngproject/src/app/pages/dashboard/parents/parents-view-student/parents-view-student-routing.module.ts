import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentsViewStudentComponent } from './parents-view-student.component';

const routes: Routes = [
  { path: '',
    component: ParentsViewStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsViewStudentRoutingModule { }
