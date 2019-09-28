import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { TableModule } from 'primeng/table';
import { TimeTablesRoutingModule } from './time-tables-routing.module';
import { TimeTableComponent } from './time-table/time-table.component';

import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';

import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


@NgModule({
  declarations: [TimeTableComponent],
  imports: [
    CommonModule,
    FormsModule,
    CalendarModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MDBBootstrapModule.forRoot(),
    TableModule,
    NgxMaterialTimepickerModule,
    TimeTablesRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TimeTablesModule { }
