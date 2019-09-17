import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    // canActivate: [AuthGuard],
    data: {
      title: 'Home'
    },
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'users',
        loadChildren: './users/users.module#UsersModule'
      },
      {
        path: 'roots',
        loadChildren: './roots/roots.module#RootsModule'
      },
      {
        path: 'timeTables',
        loadChildren: './time-tables/time-tables-routing.module#TimeTablesRoutingModule',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
