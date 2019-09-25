import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TimeTableComponent } from './time-table/time-table.component';

const routes: Routes = [
  {
    path: '',
    component: TimeTableComponent,
    data: {
      title: 'timeTable'
    }
  }, {
    path: 'timeTable',
    component: TimeTableComponent,
    data: {
      title: 'timeTable'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TimeTablesRoutingModule { }
