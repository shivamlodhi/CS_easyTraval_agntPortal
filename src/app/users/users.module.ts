import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

@NgModule({
  declarations: [AddUserComponent, UserListComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MDBBootstrapModule.forRoot()
  ]
})
export class UsersModule { }
