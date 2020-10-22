import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminViewStudentActivitiesComponent } from './super-admin-view-student-activities.component';

const routes: Routes = [
  { path: '',
    component: SuperAdminViewStudentActivitiesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminViewStudentActivitiesRoutingModule { }
