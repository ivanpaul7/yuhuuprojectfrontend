import { Component, OnInit } from '@angular/core';
import { InternshipDetailsService } from '../../services/internship-details.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-internship-details-page',
  templateUrl: './internship-details-page.component.html',
  styleUrls: ['./internship-details-page.component.scss']
})
export class InternshipDetailsPageComponent implements OnInit {

  public internshipID: string;
  public internshipDetails: Object;

  constructor(private details: InternshipDetailsService, private route: ActivatedRoute) {
    console.log(details)
    //console.log(this.route.params.id) 
    this.route.params.subscribe( params => {
      this.internshipID = params.id;
      console.log(this.internshipID);
    })
  }

  ngOnInit() {
    console.log("ngoninit")
    this.details.getInternship(this.internshipID)
    }
}
