import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './modules/login/pages/login-page/login-page.component';
import {DashboardPageComponent} from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import {StudentProfilePageComponent} from './modules/profile/pages/student-profile-page/student-profile-page.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './modules/profile/in-memory-data.service';
import {HttpClientModule} from '@angular/common/http';

import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {StudentProfileEditPageComponent} from './modules/profile/pages/student-profile-edit-page/student-profile-edit-page.component';
import {
  MatButtonModule, MatCheckboxModule, MatFormField, MatFormFieldModule, MatInput, MatInputModule, MatSelect,
  MatSelectModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    StudentProfileEditPageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    FormsModule,
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
    StudentProfileEditPageComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
