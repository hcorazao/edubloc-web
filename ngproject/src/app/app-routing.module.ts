import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'homre',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./Modules/super-admin/super-admin.module').then(m => m.SuperAdminModule)
  },
  {
    path: '',
    loadChildren: () => import('./Modules/teacher/teacher.module').then(m => m.TeacherModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
