import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {AppComponent} from './app.component';
import {DashboardPageComponent} from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import {InternshipsModule} from './modules/internships/internships.module';
import {InternshipsPageComponent} from './modules/internships/pages/internships-page/internships-page.component';
import {LoginModule} from './modules/login/login.module';
import {LoginPageComponent} from './modules/login/pages/login-page/login-page.component';
import {StudentProfilePageComponent} from './modules/profile/pages/student-profile-page/student-profile-page.component';
import {ProfileModule} from './modules/profile/profile.module';
import {InMemoryDataService} from './modules/profile/services/in-memory-data.service';
import {DashboardModule} from './modules/dashboard/dashboard.module';

const appRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'internships', component: InternshipsPageComponent, pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent, pathMatch: 'full'},
  {
    path: 'dashboard',
    component:DashboardPageComponent,
    loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
  },
  {path: 'profile/:id', component: StudentProfilePageComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    StudentProfilePageComponent,
    InternshipsPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    ProfileModule,
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
    ReactiveFormsModule,

    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  entryComponents: [],
  exports: [

    InternshipsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
