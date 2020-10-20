import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminViewClassComponent } from './super-admin-view-class.component';

const routes: Routes = [
  { path: '',
    component: SuperAdminViewClassComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminViewClassRoutingModule { }
