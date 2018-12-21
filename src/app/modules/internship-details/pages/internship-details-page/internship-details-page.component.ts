import { Component, OnInit } from '@angular/core';
import { MockInternshipDetailsService } from '../../services/internship-details.service';
import { ActivatedRoute } from '@angular/router';
import { Internship } from 'src/app/shared/model/internships.model';

@Component({
  selector: 'app-internship-details-page',
  templateUrl: './internship-details-page.component.html',
  styleUrls: ['./internship-details-page.component.scss']
})
export class InternshipDetailsPageComponent implements OnInit {

  public internshipID: string;
  public internshipDetails: Internship;

  constructor(private details: MockInternshipDetailsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.internshipID = params.id;
    })
  }

  ngOnInit() {
    this.internshipDetails = this.details.getInternship(this.internshipID)
  }
}
