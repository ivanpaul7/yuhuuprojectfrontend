import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import { InternshipsModule } from './modules/internships/internships.module';
import { InternshipsPageComponent } from './modules/internships/pages/internships-page/internships-page.component';
import { LoginModule } from './modules/login/login.module';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';
import { StudentProfilePageComponent } from './modules/profile/pages/student-profile-page/student-profile-page.component';
import { ProfileModule } from './modules/profile/profile.module';
import { InMemoryDataService } from './modules/profile/services/in-memory-data.service';

const appRoutes: Routes = [
  {path: 'internships', component: InternshipsPageComponent},
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'profile/:id', component: StudentProfilePageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
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
      { enableTracing: true } // <-- debugging purposes only
    ),
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
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  entryComponents: [
  ],
  exports: [

    InternshipsModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
