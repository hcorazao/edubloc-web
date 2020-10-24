import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpParentComponent } from './sign-up-parent.component';

const routes: Routes = [
  { path: '',
    component: SignUpParentComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignUpParentRoutingModule { }
