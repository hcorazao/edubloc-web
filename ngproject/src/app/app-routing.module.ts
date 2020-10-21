import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./Modules/super-admin/super-admin.module').then(m => m.SuperAdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./Modules/teacher/teacher.module').then(m => m.TeacherModule)
  },
  {
    path: '',
    loadChildren: () => import('./Modules/parents/parents.module').then(m => m.ParentsModule)
  },
  {
    path: '',
    loadChildren: () => import('./Modules/login/login.module').then(m => m.LoginModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
