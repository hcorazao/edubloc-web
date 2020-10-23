import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { SignUpParentRoutingModule } from './sign-up-parent-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SignUpParentComponent } from './sign-up-parent.component';


@NgModule({
  declarations: [
    SignUpParentComponent
  ],
  imports: [
    CommonModule,
    SignUpParentRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    SignUpParentComponent
  ],
  providers: [],
  bootstrap: [SignUpParentComponent]
})
export class SignUpParentModule { }
