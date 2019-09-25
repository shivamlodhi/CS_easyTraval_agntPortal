import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../servicers/user.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  isLinear = false;
  phoneNumber: number;
  tempPhoneNumber: string;
  user: any;
  phoneNum: any;
  showError: boolean;

  constructor(private userService: UserService) {
  };

  ngOnInit() {
    this.userService.getUserName('sss').subscribe(res => {
      console.log(res);
    });
  }

  setPhonenumber() {
    this.phoneNumber = 55562;
  }

  show(){
    console.log("show");
  }

  checkNum() {
    // this.phoneNumber = this.tempPhoneNumber;
    this.userService.checkPhoneNum('+94' + this.tempPhoneNumber).subscribe(res => {
      this.user = res[0];
      if (this.user) {
        this.phoneNumber = this.user.data.phoneNumber;
        this.showError = false;
      } else {
        console.log('naa');
        this.showError = true;
      }
    });
  }

  updateUser(){
    this.user.data.status = 'active';
    this.userService.updatUser(this.user.id , this.user.data);
  }
}
