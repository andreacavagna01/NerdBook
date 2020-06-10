import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import {RouterModule} from '@angular/router';
import {NbButtonModule, NbLayoutModule, NbSidebarModule} from '@nebular/theme';
import {AmplifyUIAngularModule} from '@aws-amplify/ui-angular';



@NgModule({
  declarations: [DashboardLayoutComponent],
    imports: [
        CommonModule,
        RouterModule,
        NbLayoutModule,
        NbSidebarModule.forRoot(),
        NbButtonModule,
        AmplifyUIAngularModule
    ]
})
export class LayoutModule { }
