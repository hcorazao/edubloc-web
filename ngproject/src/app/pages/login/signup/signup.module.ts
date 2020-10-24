import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { SignupRoutingModule } from './signup-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SignupComponent } from './signup.component';


@NgModule({
  declarations: [
    SignupComponent
  ],
  imports: [
    CommonModule,
    SignupRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    SignupComponent
  ],
  providers: [],
  bootstrap: [SignupComponent]
})
export class SignupModule { }
