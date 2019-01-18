import {Component, Input, OnInit} from '@angular/core';
import {Internship} from '../../../../shared/model/InternshipEnums';
import {AbstractInternshipsService} from '../../services/internships.service';
import {Company, Tag} from 'src/app/shared/model/models';

@Component({
  selector: 'app-internship-list-item',
  templateUrl: './internship-list-item.component.html',
  styleUrls: ['./internship-list-item.component.scss']
})
export class InternshipListItemComponent implements OnInit {
  @Input() internship: Internship;
  @Input() company: Company;
  @Input() tags: Tag[];

  constructor(private intershipsService: AbstractInternshipsService) {
  }

  ngOnInit() {
  }
}
