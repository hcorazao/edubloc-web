import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'teacher',
    loadChildren: () => import('./teacher-view-student/teacher-view-student.module').then ( m => m.TeacherViewStudentModule)
  },
  {
    path: 'teacher-view-student',
    loadChildren: () => import('./teacher-view-student/teacher-view-student.module').then ( m => m.TeacherViewStudentModule)
  },
  {
    path: 'teacher-view-student-nodata',
    loadChildren: () => import('./teacher-view-student-nodata/teacher-view-student.module').then ( m => m.TeacherViewStudentNodataModule)
  },
  {
    path: 'teacher-view-class',
    loadChildren: () => import('./teacher-view-class/teacher-view-class.module').then ( m => m.TeacherViewClassModule)
  },
  {
    path: 'teacher-past-class-list',
    loadChildren: () => import('./teacher-past-class-list/teacher-past-class-list.module').then ( m => m.TeacherPastClassListModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
