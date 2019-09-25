import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootsRoutingModule } from './roots-routing.module';
import { AddRouteComponent } from './add-route/add-route.component';
import { AgmCoreModule } from '@agm/core';
import { TableModule } from 'primeng/table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AgmDirectionModule } from 'agm-direction';

@NgModule({
  declarations: [AddRouteComponent],
  imports: [
    CommonModule,
    TableModule,
    RootsRoutingModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsgjBTVWY_RZum12krjO8ppeAyY1ynYok'
    }),
    AgmDirectionModule
  ]
})
export class RootsModule { }
