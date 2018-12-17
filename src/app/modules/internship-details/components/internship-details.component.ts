import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.component.html',
  styleUrls: ['./internship-details.component.scss']
})
export class InternshipDetailsComponent implements OnInit {

  @Input() internshipDetails: Object

  constructor(){}

  ngOnInit() {
  }
  

}
