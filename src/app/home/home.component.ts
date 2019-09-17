import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  showContact = false;

  constructor() { }

  ngOnInit() {
  }

  btnContact() {
    if (this.showContact) {
      this.showContact = false;
    } else {
      this.showContact = true;
    }
  }

}
