import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRouteComponent } from './add-route/add-route.component';
const routes: Routes = [
  {
    path: '',
    component: AddRouteComponent,
    data: {
      title: 'Add User'
    }
  }, {
    path: 'addRoute',
    component: AddRouteComponent,
    data: {
      title: 'Add Route'
    }
  },
  {
    path: 'Routes',
    component: AddRouteComponent,
    data: {
      title: 'Route List'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RootsRoutingModule { }
