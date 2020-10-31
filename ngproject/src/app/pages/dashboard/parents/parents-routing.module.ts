import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'parents',
    loadChildren: () => import('./parents-view-student/parents-view-student.module').then ( m => m.ParentsViewStudentModule)
  },
  {
    path: 'parents-nodata',
    loadChildren: () => import('./parents-view-student-nodata/parents-view-student-nodata.module').then ( m => m.ParentsViewStudentNodataModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsRoutingModule { }
