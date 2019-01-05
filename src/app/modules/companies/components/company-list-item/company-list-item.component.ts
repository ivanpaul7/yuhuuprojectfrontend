import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../../shared/model/Company';

@Component({
  selector: 'app-company-list-item',
  templateUrl: './company-list-item.component.html',
  styleUrls: ['./company-list-item.component.scss']
})
export class CompanyListItemComponent {
  @Input() company: Company;
  @Input() index: number;

  constructor() {
  }


}
