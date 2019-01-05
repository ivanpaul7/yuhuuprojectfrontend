import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompaniesRoutingModule} from './companies-routing.module';
import {CompanyListComponent} from './components/company-list/company-list.component';
import {CompanyListItemComponent} from './components/company-list-item/company-list-item.component';
import {FiltersComponent} from './components/filters/filters.component';
import {environment} from '../../../environments/environment';
import {AbstractCompaniesService} from './services/companies.service';

@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule
  ],
  declarations: [CompanyListComponent, CompanyListItemComponent, FiltersComponent],
  exports: [CompanyListComponent, CompanyListItemComponent],
  providers: [{
    provide: AbstractCompaniesService,
    useClass: environment.companiesService
  }]
})
export class CompaniesModule {
}
