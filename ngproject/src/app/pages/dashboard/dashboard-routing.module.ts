import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule)
},
{
  path: '',
  loadChildren: () => import('./teacher/teacher.module').then(m => m.TeacherModule)
},
{
  path: '',
  loadChildren: () => import('./parents/parents.module').then(m => m.ParentsModule)
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
