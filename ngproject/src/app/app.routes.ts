import { SuperAdminViewClassComponent } from './Modules/super-admin/super-admin-view-class/super-admin-view-class.component';
import { SuperAdminClassroomsComponent } from './Modules/super-admin/super-admin-classrooms/super-admin-classrooms.component';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Modules/login/signin/signin.component';
import { SuperAdminViewStudentComponent } from './Modules/super-admin/super-admin-view-student/super-admin-view-student.component';

const APP_ROUTES: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'super-admin-view-student', component: SuperAdminViewStudentComponent },
    { path: 'super-admin-classroom', component: SuperAdminClassroomsComponent },
    { path: 'super-admin-view-class', component: SuperAdminViewClassComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'signin' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
