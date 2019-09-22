import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  isLinear = false;
  phoneNumber: number;
  tempPhoneNumber: number;

  constructor() { }

  ngOnInit() {
  }

  setPhonenumber() {
    this.phoneNumber = 55562;
  }

  checkNum() {
    this.phoneNumber = this.tempPhoneNumber;
  }
}
