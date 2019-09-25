import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TableModule } from 'primeng/table';
import { TimeTablesRoutingModule } from './time-tables-routing.module';
import { TimeTableComponent } from './time-table/time-table.component';

@NgModule({
  declarations: [TimeTableComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    TableModule,
    TimeTablesRoutingModule
  ]
})
export class TimeTablesModule { }
