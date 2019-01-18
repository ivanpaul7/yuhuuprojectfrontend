import {Component, Input, OnInit} from '@angular/core';
import {Applicant} from '../../../../shared/model/applicant';

@Component({
  selector: 'app-mini-profile',
  templateUrl: './mini-profile.component.html',
  styleUrls: ['./mini-profile.component.scss']
})
export class MiniProfile implements OnInit {
  public nameToDisplay:string="Rares Beltechi";
  @Input() applicant:Applicant;

  constructor() { }

  ngOnInit() {
  }

}
