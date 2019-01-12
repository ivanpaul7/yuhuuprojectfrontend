import { Component, Input, OnInit } from '@angular/core';
import { Internship } from 'src/app/shared/model/Internship';

@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.component.html',
  styleUrls: ['./internship-details.component.scss']
})
export class InternshipDetailsComponent implements OnInit {

  @Input() internshipDetails: Internship;

  constructor() {
  }

  ngOnInit() {
  }


}
