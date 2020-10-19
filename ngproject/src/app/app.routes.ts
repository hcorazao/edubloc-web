import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Modules/login/signin/signin.component';

const APP_ROUTES: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'signin' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
