
import { NgModule                } from '@angular/core';
import { Routes, RouterModule    } from '@angular/router';
import { FormLoginComponent      } from './login/form-login/form-login.component';
import { IndexDashboardComponent } from './dashboard/index-dashboard/index-dashboard.component';

const routes: Routes = [
  {
    path      : '',
    redirectTo: 'login',
    pathMatch : 'full'
  },
  {
    path      : 'login',
    component : FormLoginComponent
  },
  {
    path      : 'dashboard',
    component : IndexDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
