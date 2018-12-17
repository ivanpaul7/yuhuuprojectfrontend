import { Component, OnInit } from '@angular/core';
import { MockInternshipDetailsService } from '../../services/internship-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-internship-details-page',
  templateUrl: './internship-details-page.component.html',
  styleUrls: ['./internship-details-page.component.scss']
})
export class InternshipDetailsPageComponent implements OnInit {

  public internshipID: string;
  public internshipDetails: Object;

  constructor(private details: MockInternshipDetailsService, private route: ActivatedRoute) {
    this.route.params.subscribe( params => {
      this.internshipID = params.id;
    })
  }

  ngOnInit() {
   this.internshipDetails = JSON.parse(this.details.getInternship(this.internshipID))
    }
}
