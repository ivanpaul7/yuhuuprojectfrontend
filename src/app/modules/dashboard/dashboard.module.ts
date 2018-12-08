import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {dashboardRoutes} from './dashboard.routing';
import { DashboardTest1 } from './components/dashboard-test1/dashboard-test1.component';
import { DashboardTest2 } from './components/dashboard-test2/dashboard-test2.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardTest1, DashboardTest2,],
  exports:[DashboardTest1, DashboardTest2 , RouterModule]
})
export class DashboardModule { }
