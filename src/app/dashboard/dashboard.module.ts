import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NbButtonModule, NbCardModule, NbInputModule, NbLayoutModule, NbTabsetModule, NbUserModule} from '@nebular/theme';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
  declarations: [DashboardComponent, ProfileComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        NbLayoutModule,
        NbInputModule,
        NbButtonModule,
        NbTabsetModule,
        NbCardModule,
        NbUserModule
    ]
})
export class DashboardModule { }
