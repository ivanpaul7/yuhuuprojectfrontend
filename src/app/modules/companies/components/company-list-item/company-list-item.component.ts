import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../../shared/model/Company';
import {ActivatedRoute, Router} from '@angular/router';
import {AbstractCompaniesService} from '../../services/companies.service';

@Component({
  selector: 'app-company-list-item',
  templateUrl: './company-list-item.component.html',
  styleUrls: ['./company-list-item.component.scss']
})
export class CompanyListItemComponent implements OnInit{
  @Input() company: Company;
  @Input() index: number;
  distance: number;

  constructor(private companyService: AbstractCompaniesService) {
  }

  ngOnInit() {
    console.log('list-item');
    this.companyService.getDistances(this.company.id).subscribe(
      (data: number) => {
        console.log(data);
        this.distance = data;
      }
    );
    console.log('da cu distanta');
  }

}
