import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../../shared/model/Company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {

  @Input() companyDetail: Company;

  constructor() {
  }

  ngOnInit() {
  }

}
