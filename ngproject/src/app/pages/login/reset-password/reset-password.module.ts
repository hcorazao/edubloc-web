import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { ResetPasswordRoutingModule } from './reset-password-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// components
import { ResetPasswordComponent } from './reset-password.component';



@NgModule({
  declarations: [
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    ResetPasswordRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    ResetPasswordComponent
  ],
  providers: [],
  bootstrap: [ResetPasswordComponent]
})
export class ResetPasswordModule { }
