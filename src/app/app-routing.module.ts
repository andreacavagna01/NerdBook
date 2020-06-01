import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardLayoutComponent} from './layout/dashboard-layout/dashboard-layout.component';

/**
 * Main Routing file we set here the main pages and are all set
 */
const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: DashboardLayoutComponent,
        loadChildren: './dashboard/dashboard.module#DashboardModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
