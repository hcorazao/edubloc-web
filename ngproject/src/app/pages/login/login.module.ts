import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Rutas
import { LoginRoutingModule } from './login-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: []
})
export class LoginModule { }
