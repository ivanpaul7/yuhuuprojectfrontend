import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './modules/profile/services/in-memory-data.service';

import {AppComponent} from './app.component';
import {LoginPageComponent} from './modules/login/pages/login-page/login-page.component';
import {LoginModule} from './modules/login/login.module';
import {ProfileModule} from './modules/profile/profile.module';
import {StudentProfilePageComponent} from './modules/profile/pages/student-profile-page/student-profile-page.component';
import {DashboardPageComponent} from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import {
  MatButtonModule, MatCheckboxModule, MatFormField, MatFormFieldModule, MatInput, MatInputModule, MatSelect, MatSelectModule, MatCardModule
} from '@angular/material';
import { ClarityModule } from '@clr/angular';


const appRoutes: Routes = [
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
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LoginModule,
    ProfileModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
