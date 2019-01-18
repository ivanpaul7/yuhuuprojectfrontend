import {Component, Input, OnInit} from '@angular/core';
import {Company} from '../../../../shared/model/Company';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.scss']
})
export class BusinessList implements OnInit {

  @Input() companies: Company[];

  constructor() { }

  ngOnInit() {
  }

}
