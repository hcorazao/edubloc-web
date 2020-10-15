import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';



const APP_ROUTES: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'resetpassword', component: ResetPasswordComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'signin' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
