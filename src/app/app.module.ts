import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
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

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'internships', component: InternshipsPageComponent, pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  {path: 'profile/:id', component: StudentProfilePageComponent, pathMatch: 'full'},
  {path: 'register', component: RegisterPageComponent, pathMatch: 'full'},
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AlertModule,
    LoginModule,
    ProfileModule,
    InternshipsModule,
    InternshipDetailsModule,
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
    ReactiveFormsModule
  ],
  entryComponents: [],
  exports: [
    LoginModule,
    ReactiveFormsModule
  ],
  providers: [
    AlertModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
