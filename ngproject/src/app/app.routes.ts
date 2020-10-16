import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { ParentsComponent } from './pages/parents/parents.component';



const APP_ROUTES: Routes = [
    { path: 'signin', component: SigninComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'resetpassword', component: ResetPasswordComponent },
    { path: 'student', component: StudentComponent },
    { path: 'teacher', component: TeacherComponent },
    { path: 'parents', component: ParentsComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'student' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
