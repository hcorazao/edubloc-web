import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminClassroomsComponent } from './super-admin-classrooms.component';

const routes: Routes = [
  { path: '',
    component: SuperAdminClassroomsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminClassroomsRoutingModule { }
