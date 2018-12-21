import {Component, Input} from '@angular/core';
import {Internship} from '../../../../shared/model/internships.model';

@Component({
  selector: 'app-internship-list-item',
  templateUrl: './internship-list-item.component.html',
  styleUrls: ['./internship-list-item.component.scss']
})
export class InternshipListItemComponent {
  @Input() internship: Internship;
  @Input() index: number;

  constructor() {
  }

}
