import {Component, OnInit} from '@angular/core';
import {Company} from '../../../../shared/model/company';
import {AbstractCompaniesService} from '../../services/companies.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  companies: Company[];

  constructor(private companyService: AbstractCompaniesService) {
  }

  ngOnInit() {
  }

  public get listCompanies() {
    this.companies = this.companyService.getCompanies();
    return this.companies;
  }

  public get filteredCompanies() {
    this.companies = this.companyService.getCompanies();
    if (this.companyService.getNameFilters().length !== 0) {
      this.companies = this.companies.filter(
        (company) => this.companyService.getNameFilters().indexOf(company.name) > -1);
    }

    return this.companies;
  }

}
