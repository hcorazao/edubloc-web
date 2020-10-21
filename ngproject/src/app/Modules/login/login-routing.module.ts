import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'reset-password',
    loadChildren: () => import('./reset-password/reset-password.module').then ( m => m.ResetPasswordModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./signin/signin.module').then ( m => m.SigninModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./signup/signup.module').then ( m => m.SignupModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
