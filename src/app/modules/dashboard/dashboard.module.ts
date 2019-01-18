import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CompanyDashboardComponent} from './components/companyDashboard/company-dashboard.component';
import {ApplicantDashboardComponent} from './components/applicantDashboard/applicant-dashboard.component';
import {MessageCard} from './utils/message-card/message-card.component';
import { MiniProfile } from './utils/mini-profile/mini-profile.component';
import { BusinessList } from './utils/business-list/business-list.component';
import { XYLineChartComponent } from './utils/xyline-chart/xyline-chart.component';
import { PieChartComponent } from './utils/pie-chart/pie-chart.component';
import {appRoutes} from '../../app.module';
import {AbstractInternshipsService} from '../internships/services/internships.service';
import {environment} from '../../../environments/environment';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CompanyDashboardComponent,
    ApplicantDashboardComponent,
    MessageCard,
    MiniProfile,
    BusinessList,
    XYLineChartComponent,
    PieChartComponent
  ],
  exports: [
    CompanyDashboardComponent,
    ApplicantDashboardComponent,
    MessageCard,
    MiniProfile,
    BusinessList,
    XYLineChartComponent,
    RouterModule],
  providers: [
    {
      provide: CompanyDashboardComponent
    }
    ]
})
export class DashboardModule {
}
