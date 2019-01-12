import {Component, OnInit} from '@angular/core';
import {AbstractInternshipDetailsService} from '../../services/internship-details.service';
import {ActivatedRoute} from '@angular/router';
import {Internship} from 'src/app/shared/model/Internship';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-internship-details-page',
  templateUrl: './internship-details-page.component.html',
  styleUrls: ['./internship-details-page.component.scss']
})
export class InternshipDetailsPageComponent implements OnInit {

  public internshipID: string;
  public internshipDetails: Internship;

  constructor(private details: AbstractInternshipDetailsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.internshipID = params.id;
    });
  }

  ngOnInit() {
    this.details.getInternship(this.internshipID).subscribe(internship => this.internshipDetails = internship);
  }
}
