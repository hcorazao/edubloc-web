import { RouterModule, Routes } from '@angular/router';
import { ParentsViewStudentComponent } from './parents-view-student/parents-view-student.component';

const APP_ROUTES: Routes = [
    { path: 'parents-view-student', component: ParentsViewStudentComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'parents-view-student' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
