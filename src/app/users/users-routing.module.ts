import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: AddUserComponent,
    data: {
      title: 'Add User'
    }
  }, {
    path: 'addUser',
    component: AddUserComponent,
    data: {
      title: 'Add User'
    }
  },
  {
    path: 'Users',
    component: UserListComponent,
    data: {
      title: 'User List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
