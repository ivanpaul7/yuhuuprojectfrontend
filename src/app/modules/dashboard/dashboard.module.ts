import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {dashboardRoutes} from './dashboard.routing';
import {DashboardTest1Component} from './components/dashboard-test1/dashboard-test1.component';
import {DashboardTest2Component} from './components/dashboard-test2/dashboard-test2.component';
import {Home} from './components/home/home.component';
import {MessageCard} from './utils/message-card/message-card.component';
import { MiniProfile } from './utils/mini-profile/mini-profile.component';
import { BusinessList } from './utils/business-list/business-list.component';
import { XYLineChartComponent } from './utils/xyline-chart/xyline-chart.component';
import { PieChartComponent } from './utils/pie-chart/pie-chart.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  declarations: [DashboardTest1Component,
    DashboardTest2Component,
    Home,
    MessageCard,
    MiniProfile,
    BusinessList,
    XYLineChartComponent,
    PieChartComponent
  ],
  exports: [DashboardTest1Component,
    DashboardTest2Component,
    Home,
    MessageCard,
    MiniProfile,
    BusinessList,
    XYLineChartComponent,
    RouterModule]
})
export class DashboardModule {
}
