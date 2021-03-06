import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Rutas
import { AppRoutingModule } from './app-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// ng-bootstrap.github.io
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// components
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
