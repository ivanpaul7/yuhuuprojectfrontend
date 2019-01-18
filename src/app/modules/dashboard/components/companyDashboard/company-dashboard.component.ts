import {Component, OnInit} from '@angular/core';
import {AbstractInternshipsService} from '../../../internships/services/internships.service';
import {CompanyDashboardService} from '../../services/company-dashboard.service';
import {Company} from '../../../../shared/model/Company';
import {Photo} from '../../../../shared/model/Photo';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss']
})
export class CompanyDashboardComponent implements OnInit {
  logo: string;
  company: Company;

  constructor(private companyDashboardService: CompanyDashboardService) {
  }

  ngOnInit() {
    this.companyDashboardService.getCompanyPhoto().subscribe(
      (data: Photo) => this.logo = data.url,
      error => console.log(error)
    );

    this.companyDashboardService.getCompanyDetails().subscribe(
      (data: Company) => this.company = data,
      error => console.log(error)
    );
  }

}
