import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Company} from '../../../../shared/model/company';
import {AbstractCompaniesService} from '../../services/companies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyListComponent implements OnInit {
  companies: Company[] = [];
  unfilteredCompaniesList: Company[] = [];

  constructor(private companyService: AbstractCompaniesService, private router: Router, private changeDetectionRef: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.companyService.initialize();
    this.companyService.getCompanies()
      .subscribe(company => {
        this.unfilteredCompaniesList = company;
        this.changeDetectionRef.detectChanges();
      });
  }

  public get filteredCompanies() {
    this.companies = this.unfilteredCompaniesList;
    if (this.companyService.getNameFilters() != null &&
      this.companyService.getNameFilters().length !== 0 &&
      this.companies != null && this.companies.length !== 0) {
      this.companies = this.companies.filter(
        (company) => this.companyService.getNameFilters().indexOf(company.name) > -1);
    }
    return this.companies;
  }

  goToDetailedCompany(companyId: number) {
    this.router.navigate(['/profile/company/' + companyId]);
  }

  incrementView(companyId: number) {
    this.companyService.selectCompany(companyId).subscribe();
  }
}
