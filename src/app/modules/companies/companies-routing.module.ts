import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesPageComponent} from './pages/companies-page/companies-page.component';
import {CompanyDetailsPageComponent} from './pages/company-details-page/company-details-page.component';

const companiesRoutes: Routes = [
  {
    path: 'companies',
    component: CompaniesPageComponent,
  },
  {path: 'companies/:id', component: CompanyDetailsPageComponent},

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
