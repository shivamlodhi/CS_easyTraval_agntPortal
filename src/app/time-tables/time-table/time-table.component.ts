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

  constructor(private router: Router, private route: ActivatedRoute, private routeService: RouteService) {
    this.route.params.subscribe(params => {
      this.id = params.id;
      console.log(params.id);
    });
  }

  ngOnInit() {
    this.routeService.getTimeTables(this.id).subscribe(res => {
      this.timetable = res;
      console.log(this.timetable);
    });
    
    this.cols = [
      { field: 'start', header: 'Start' },
      {field: 'end', header: 'End' },
      { field: 'departureTime', header: 'Departure Time' },
      { field: 'arrivalTime', header: 'Arrival Time' },
  ];
  }

}
