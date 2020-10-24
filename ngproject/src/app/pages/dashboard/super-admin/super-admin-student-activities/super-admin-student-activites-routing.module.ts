import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminStudentActivitiesComponent } from './super-admin-student-activities.component';

const routes: Routes = [
  { path: '',
    component: SuperAdminStudentActivitiesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminStudentActivitiesRoutingModule { }
