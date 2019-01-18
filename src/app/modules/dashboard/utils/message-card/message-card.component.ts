import {Component, Input, OnInit} from '@angular/core';
import {Skill} from '../../../../shared/model/Skill';
import {MessageCardService} from './service/message-card.service';
import {Internship} from '../../../../shared/model/Internship';

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
