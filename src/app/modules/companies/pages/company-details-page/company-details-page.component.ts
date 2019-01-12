import { Component, OnInit } from '@angular/core';
import {Company} from '../../../../shared/model/Company';
import {AbstractCompanyDetailsService} from '../../services/company-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-company-details-page',
  templateUrl: './company-details-page.component.html',
  styleUrls: ['./company-details-page.component.scss']
})
export class CompanyDetailsPageComponent implements OnInit {

  public companyID: string;
  public companyDetails: Company;

  constructor(private details: AbstractCompanyDetailsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.companyID = params.id;
    });
  }

  ngOnInit() {
    this.companyDetails = this.details.getCompany(this.companyID);
  }

}
