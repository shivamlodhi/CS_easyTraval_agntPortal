import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RouteService } from 'src/app/servicers/routes.service';

@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.scss']
})
export class TimeTableComponent implements OnInit {
  timetable: any;
  id: any;
  cols: { field: string; header: string; }[];
  mainStops: any;
  _route: any;
  Dtime: Date;
  Atime: Date;
  start: any;
  end: any;

  constructor(private router: Router, private route: ActivatedRoute, private routeService: RouteService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(params);
    });

    this.Dtime = new Date();
    this.Dtime.setHours(10, 0);
    this.Atime = new Date();
    this.Atime.setHours(10, 0);
  }

  ngOnInit() {
    this.routeService.getTimeTables(this.id).subscribe(res => {
      this.timetable = res;
    });

    this.routeService.getMainStops(this.id).subscribe(res => {
      this._route = res;
      this.mainStops = this._route.mainStops;
      console.log(this.mainStops);
    })
    this.cols = [
      { field: 'start', header: 'Start' },
      { field: 'end', header: 'End' },
      { field: 'departureTime', header: 'Departure Time' },
      { field: 'arrivalTime', header: 'Arrival Time' },
    ];
  }

  setStart(start) {
    this.start = start;
  }

  setEnd(end) {
    this.end = end;
  }

  addTurn() {
    console.log(this.Dtime.getHours() + ':' + this.Dtime.getMinutes() + 'h');
    console.log(this.Atime.getHours() + ':' + this.Atime.getMinutes() + ' h');
    const obj = {
      start: this.start,
      end: this.end,
      arrivalTime: this.Atime.getHours() + ':' + this.Atime.getMinutes() + 'h',
      departureTime: this.Dtime.getHours() + ':' + this.Dtime.getMinutes() + 'h'
    };
    this.routeService.setTurn(obj, this.id);
    this.start = null;
    this.end = null;
  }

}
