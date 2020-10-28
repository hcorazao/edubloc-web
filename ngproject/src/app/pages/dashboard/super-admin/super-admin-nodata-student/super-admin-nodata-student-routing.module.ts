import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminNodataStudentComponent } from './super-admin-nodata-student.component';

const routes: Routes = [
  { path: '',
    component: SuperAdminNodataStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminNodataStudentRoutingModule { }