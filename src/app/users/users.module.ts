import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatStepperModule } from '@angular/material/stepper';
import { BrowserModule } from '@angular/platform-browser';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatRippleModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddUserComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class UsersModule { }
