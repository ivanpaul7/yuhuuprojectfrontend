import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatListModule,
  MatIconModule,
  MatAutocompleteModule
} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from './app.component';
import {DashboardPageComponent} from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import {InternshipsModule} from './modules/internships/internships.module';
import {InternshipsPageComponent} from './modules/internships/pages/internships-page/internships-page.component';
import {LoginModule} from './modules/login/login.module';
import {LoginPageComponent} from './modules/login/pages/login-page/login-page.component';
import {StudentProfilePageComponent} from './modules/profile/pages/student-profile-page/student-profile-page.component';
import {ProfileModule} from './modules/profile/profile.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {RegisterPageComponent} from './modules/login/pages/register-page/register-page.component';
import {AlertModule} from './modules/alert/alert.module';
import {CompanyProfilePageComponent} from './modules/profile/pages/company-profile-page/company-profile-page.component';
import {AgmCoreModule} from '@agm/core';
import {DatePipe} from '@angular/common';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {InternshipDetailsPageComponent} from './modules/internships/pages/internship-details-page/internship-details-page.component';
import {CompaniesPageComponent} from './modules/companies/pages/companies-page/companies-page.component';
import {CompaniesModule} from './modules/companies/companies.module';
import {NavBarComponent} from './masterComponents/navbar/nav-bar.component';
import {SessionManagementService} from './shared/utils/session-management.service';
import {ApplicantDashboardComponent} from './modules/dashboard/components/applicantDashboard/applicant-dashboard.component';
import {CompanyDashboardComponent} from './modules/dashboard/components/companyDashboard/company-dashboard.component';
import {NotificationManagerComponent} from './shared/utils/component/notification-manager/notification-manager.component';
import {ProgressSpinnerComponent} from './shared/utils/component/progress-spinner/progress-spinner.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {AuthGuard} from './modules/guard/auth-guard.service';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { MatSnackBarModule} from '@angular/material/typings/esm5/snack-bar';


export const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
  {
    path: 'profile',
    component: CompanyProfilePageComponent,
    loadChildren: './modules/profile/profile.module#ProfileModule',
    canActivate: [AuthGuard]
  },
  {path: 'register', component: RegisterPageComponent, pathMatch: 'full'},
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    children: [
      {path: 'applicantHome', component: ApplicantDashboardComponent},
      {path: 'companyHome', component: CompanyDashboardComponent}
    ],
    canActivate: [AuthGuard]
  },
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuard]
  },
  {path: '**', redirectTo: '/login', pathMatch: 'full', canActivate: [AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterPageComponent,
    DashboardPageComponent,
    InternshipDetailsPageComponent,
    StudentProfilePageComponent,
    InternshipsPageComponent,
    CompaniesPageComponent,
    NavBarComponent,
    NotificationManagerComponent,
    ProgressSpinnerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule,
    LoginModule,
    ProfileModule,
    InternshipsModule,
    CompaniesModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {} // <-- debugging purposes only
    ),
    DashboardModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    MatIconModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatSnackBarModule ,
    ReactiveFormsModule,
    NgbModule,
    ChartsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC920soN4PRUEoaIeornkVABcYuWkokcYM'
    })
  ],
  entryComponents: [],
  exports: [
    LoginModule,
    ReactiveFormsModule,
  ],
  providers: [
    AlertModule,
    DatePipe,
    SessionManagementService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

export interface NavBarItem {
  title: string;
  path: string;
}

export let applicantNavBarItems: NavBarItem[] = [
  {title: 'Dashboard', path: 'dashboard/applicantHome'},
  {title: 'Internship List', path: 'internships'},
  {title: 'Companies', path: 'companies'},
];

export let companyNavBarItems: NavBarItem[] = [
  {title: 'Dashboard', path: 'dashboard/companyHome'},
];

