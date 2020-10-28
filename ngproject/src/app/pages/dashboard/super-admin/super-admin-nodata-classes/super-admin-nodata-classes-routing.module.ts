import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperAdminNodataClassesComponent } from './super-admin-nodata-classes.component';

const routes: Routes = [
  { path: '',
    component: SuperAdminNodataClassesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminNodataClassesRoutingModule { }