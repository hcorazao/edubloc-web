import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherPastClassListComponent } from './teacher-past-class-list.component';

const routes: Routes = [
  { path: '',
    component: TeacherPastClassListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherPastClassListRoutingModule { }
