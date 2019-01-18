import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {CompanyDashboardComponent} from './components/companyDashboard/company-dashboard.component';
import {ApplicantDashboardComponent} from './components/applicantDashboard/applicant-dashboard.component';
import {MessageCard} from './utils/message-card/message-card.component';
import {MiniProfile} from './utils/mini-profile/mini-profile.component';
import {BusinessList} from './utils/business-list/business-list.component';
import {XYLineChartComponent} from './utils/xyline-chart/xyline-chart.component';
import {PieChartComponent} from './utils/pie-chart/pie-chart.component';
import {appRoutes} from '../../app.module';
import {InternshipsListForApplicantComponent} from './components/internships-list-for-applicant/internships-list-for-applicant.component';
import {AbstractIntershipsForDashboardServicesService} from './services/interships-services.service';
import {environment} from '../../../environments/environment';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatListModule,
  MatIconModule,
  MatAutocompleteModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
  ],
  declarations: [
    CompanyDashboardComponent,
    ApplicantDashboardComponent,
    MessageCard,
    MiniProfile,
    BusinessList,
    XYLineChartComponent,
    PieChartComponent,
    InternshipsListForApplicantComponent
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
      provide: AbstractIntershipsForDashboardServicesService,
      useClass: environment.internshipServiceForDashboardService
    }
  ]
})
export class DashboardModule {
}
