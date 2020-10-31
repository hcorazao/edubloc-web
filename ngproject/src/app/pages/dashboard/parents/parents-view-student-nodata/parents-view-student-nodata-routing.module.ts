import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentsViewStudentNodataComponent } from './parents-view-student-nodata.component';

const routes: Routes = [
  { path: '',
    component: ParentsViewStudentNodataComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsViewStudentNodataRoutingModule { }
