import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// Rutas
import { SuperAdminNodataClassesRoutingModule } from './super-admin-nodata-classes-routing.module';
// servicios

// font awesome
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// components
import { SuperAdminNodataClassesComponent } from './super-admin-nodata-classes.component';
import { SharedModule } from '../../../../shared/shared.module';


@NgModule({
  declarations: [
    SuperAdminNodataClassesComponent
  ],
  imports: [
    CommonModule,
    SuperAdminNodataClassesRoutingModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    SuperAdminNodataClassesComponent
  ],
  providers: [],
  bootstrap: [SuperAdminNodataClassesComponent]
})
export class SuperAdminNodataClassesModule { }