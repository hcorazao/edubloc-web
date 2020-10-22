import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherViewClassComponent } from './teacher-view-class.component';

const routes: Routes = [
  { path: '',
    component: TeacherViewClassComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherViewClassRoutingModule { }
