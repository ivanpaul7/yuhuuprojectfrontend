import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardPageComponent } from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import { InternshipListItemComponent } from './modules/internships/internship-list/internship-list-item/internship-list-item.component';
import { InternshipListComponent } from './modules/internships/internship-list/internship-list.component';
import { LoginPageComponent } from './modules/login/pages/login-page/login-page.component';
import { InternshipsModule } from './modules/internships/internships.module';

const appRoutes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: 'dashboard',      component: DashboardPageComponent },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    InternshipListComponent,
    InternshipListItemComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    InternshipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
