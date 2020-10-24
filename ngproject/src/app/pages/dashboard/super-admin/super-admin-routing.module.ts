import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'super-admin-view-student',
    loadChildren: () => import('./super-admin-view-student/super-admin-view-student.module').then ( m => m.SuperAdminViewStudentModule)
  },
  {
    path: 'super-admin-view-class',
    loadChildren: () => import('./super-admin-view-class/super-admin-view-class.module').then ( m => m.SuperAdminViewClassModule)
  },
  {
    path: 'super-admin-student-activities',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./super-admin-student-activities/super-admin-student-activities.module').then ( m => m.SuperAdminStudentActivitiesModule)
  },
  {
    path: 'super-admin-classrooms',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./super-admin-classrooms/super-admin-classrooms.module').then ( m => m.SuperAdminClassroomsModule)
  },
  {
    path: 'super-admin-view-student-activities',
    // tslint:disable-next-line: max-line-length
    loadChildren: () => import('./super-admin-view-student-activities/super-admin-view-student-activities.module').then ( m => m.SuperAdminViewStudentActivitiesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
