import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './modules/login/pages/login-page/login-page.component';
import {DashboardPageComponent} from './modules/dashboard/pages/dashboard-page/dashboard-page.component';

const appRoutes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'dashboard', component: DashboardPageComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    DashboardPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
