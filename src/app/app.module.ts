import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AmplifyUIAngularModule } from '@aws-amplify/ui-angular';
import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {NbThemeModule} from '@nebular/theme';
import {LayoutModule} from './layout/layout.module';

Amplify.configure(awsconfig);

@NgModule({
  declarations: [AppComponent],
  imports: [AmplifyUIAngularModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    LayoutModule,
    NbThemeModule.forRoot({ name: 'dark' })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
