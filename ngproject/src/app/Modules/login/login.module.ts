import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTING } from './login.routes';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { AppRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { SigninComponent } from './signin/signin.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    LoginComponent,
    SigninComponent,
    ResetPasswordComponent,
    SignupComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class LoginModule { }
