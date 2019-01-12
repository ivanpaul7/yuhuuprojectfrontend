import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CompaniesPageComponent} from './pages/companies-page/companies-page.component';

const companiesRoutes: Routes = [
  {
    path: 'companies',
    component: CompaniesPageComponent,
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
