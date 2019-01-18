import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesPageComponent} from './pages/companies-page/companies-page.component';
import {AuthGuard} from '../guard/auth-guard.service';

const companiesRoutes: Routes = [
  {
    path: 'companies',
    component: CompaniesPageComponent,
    canActivate: [AuthGuard]
  },

];

@NgModule({
  imports: [
    RouterModule.forChild(companiesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CompaniesRoutingModule {
}
