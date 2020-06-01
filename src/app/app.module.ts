import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {DashboardLayoutComponent} from './layout/dashboard-layout/dashboard-layout.component';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [AppComponent, DashboardLayoutComponent],
  imports: [AmplifyUIAngularModule, BrowserModule, RouterModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
