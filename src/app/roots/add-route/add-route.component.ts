import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { RouteService } from '../../servicers/routes.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicers/user.service';
import { CookieService } from 'ngx-cookie-service';
/// <reference types="@types/googlemaps" />

@Component({
  selector: 'app-add-route',
  templateUrl: './add-route.component.html',
  styleUrls: ['./add-route.component.scss']
})
export class AddRouteComponent implements OnInit {

  title: string = 'AGM project';
  cols: any; F
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;

  @ViewChild('search', null)
  public searchElementRef: ElementRef;
  routes: any;

  origin: any; // = { lat: 29.8174782, lng: -95.6814757 }
  destination: any; //= { lat: 40.6976637, lng: -74.119764 }
  waypoints = [
    { location: { lat: 39.0921167, lng: -94.8559005 } },
    { location: { lat: 41.8339037, lng: -87.8720468 } }
  ]
  stops: any;
  user: any;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router: Router,
    private routeService: RouteService,
    private userService: UserService,
    private cookieService: CookieService
  ) {
  }


  ngOnInit() {
    this.user = this.userService.checkStatus();
    console.log(this.cookieService.get('login'));
    if (!this.user) {
      this.router.navigate(['home']);
    }
    this.cols = [
      { field: 'id', header: 'Route Number' },
      { field: 'title', header: 'Tiltle' },
      { field: 'mainStops', header: 'Main Stops' }
    ];

    this.routeService.getStops().subscribe(res => {
      this.stops = res;
      console.log(res);
    });


    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;




    });

    this.routeService.getAllRourtes().subscribe(res => {
      this.routes = res;
    });

  }

  // Get Current Location Coordinates
  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
        console.log("this" + this.latitude);
      });
    }
  }


  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.latitude = $event.coords.lat;
    this.longitude = $event.coords.lng;
    this.getAddress(this.latitude, this.longitude);
  }
  show(details) {
    console.log(details);
    this.router.navigate(['timeTables', details]);
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results, status) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  setRoute(event) {
    console.log(event.data.secondEnd._long);
    console.log(event.data.secondEnd._lat);

    this.origin = { lat: event.data.firstEnd._lat, lng: event.data.firstEnd._long };
    this.destination = { lat: event.data.secondEnd._lat, lng: event.data.secondEnd._long };
  }

}

