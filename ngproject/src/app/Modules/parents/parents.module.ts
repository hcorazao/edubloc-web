import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { APP_ROUTING } from './parents.routes';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { ParentsRoutingModule } from './parents-routing.module';
import { ParentsComponent } from './parents.component';
import { ParentsViewStudentComponent } from './parents-view-student/parents-view-student.component';


@NgModule({
  declarations: [
    ParentsComponent,
    ParentsViewStudentComponent,
  ],
  imports: [
    BrowserModule,
    ParentsRoutingModule,
    APP_ROUTING,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [ParentsComponent]
})
export class ParentsModule { }
