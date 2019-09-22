import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RootsRoutingModule } from './roots-routing.module';
import { AddRouteComponent } from './add-route/add-route.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [AddRouteComponent],
  imports: [
    CommonModule,
    RootsRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCsgjBTVWY_RZum12krjO8ppeAyY1ynYok'
    })
  ]
})
export class RootsModule { }
