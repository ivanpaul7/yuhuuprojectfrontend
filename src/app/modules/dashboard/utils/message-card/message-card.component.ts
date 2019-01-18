import {Component, Input, OnInit} from '@angular/core';
import {Internship} from '../../../../shared/model/InternshipEnums';

@Component({
  selector: 'app-message-card',
  templateUrl: './message-card.component.html',
  styleUrls: ['./message-card.component.scss']
})
export class MessageCard implements OnInit {

  @Input() internships: Internship[] =[];
  @Input() skillList :string;

  constructor() {
  }


  ngOnInit() {
  }

}
