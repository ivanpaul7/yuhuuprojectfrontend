import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CompanyListComponent} from './components/company-list/company-list.component';
import {CompanyListItemComponent} from './components/company-list-item/company-list-item.component';

const companiesRoutes: Routes = [
  {
    path: 'companies',
    component: CompanyListComponent,
    children: [
      {
        path: ':id',
        component: CompanyListItemComponent,
        children: [
          {
            path: '',
            redirectTo: '/:id',
            pathMatch: 'full'
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(companiesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CompaniesRoutingModule { }
