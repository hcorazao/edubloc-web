import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { SigninRoutingModule } from './signin-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SigninComponent } from './signin.component';


@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule,
    SigninRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    SigninComponent
  ],
  providers: [],
  bootstrap: [SigninComponent]
})
export class SigninModule { }
