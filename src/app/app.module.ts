import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './modules/login/pages/login-page/login-page.component';
import {DashboardPageComponent} from './modules/dashboard/pages/dashboard-page/dashboard-page.component';
import {LoginModule} from './modules/login/login.module';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InternshipDetailsPageComponent } from './modules/internship-details/pages/internship-details-page/internship-details-page.component';
import { InternshipDetailsModule } from './modules/internship-details/internship-details.module';
import { importType } from '@angular/compiler/src/output/output_ast';

const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: 'internship/:id', component: InternshipDetailsPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent,
    InternshipDetailsPageComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    ),
    LoginModule,
    InternshipDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
