import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTING } from './app.routes';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StudentComponent } from './pages/student/student.component';
import { TeacherComponent } from './pages/teacher/teacher.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { ClassroomsComponent } from './components/classrooms/classrooms.component';
import { StudentActivitiesComponent } from './components/student-activities/student-activities.component';
import { CurrentClassComponent } from './components/current-class/current-class.component';
import { PastClassComponent } from './components/past-class/past-class.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ResetPasswordComponent,
    SignupComponent,
    StudentComponent,
    TeacherComponent,
    ParentsComponent,
    ClassroomsComponent,
    StudentActivitiesComponent,
    CurrentClassComponent,
    PastClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
