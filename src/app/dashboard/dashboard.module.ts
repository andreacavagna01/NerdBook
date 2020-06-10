import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NbButtonModule, NbInputModule, NbLayoutModule} from '@nebular/theme';


@NgModule({
  declarations: [DashboardComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        ReactiveFormsModule,
        NbLayoutModule,
        NbInputModule,
        NbButtonModule
    ]
})
export class DashboardModule { }
