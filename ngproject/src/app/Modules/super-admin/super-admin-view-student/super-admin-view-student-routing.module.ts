import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminViewStudentComponent } from './super-admin-view-student.component';

const routes: Routes = [
  { path: '',
    component: SuperAdminViewStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminViewStudentRoutingModule { }
