import { RouterModule, Routes } from '@angular/router';
import { SuperAdminViewStudentComponent } from './super-admin-view-student/super-admin-view-student.component';



const APP_ROUTES: Routes = [
    { path: 'super-admin-view-student', component: SuperAdminViewStudentComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'super-admin-view-student' }
];

export const SUPER_ADMIN_ROUTING = RouterModule.forRoot(SUPER_ADMIN_ROUTING, { useHash: true });
