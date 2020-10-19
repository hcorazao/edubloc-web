import { RouterModule, Routes } from '@angular/router';
import { TeacherViewStudentComponent } from './teacher-view-student/teacher-view-student.component';



const APP_ROUTES: Routes = [
    { path: 'teacher-view-studnet', component: TeacherViewStudentComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'teacher-view-student' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });
