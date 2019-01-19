import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Internship} from 'src/app/shared/model/InternshipEnums';
import {Photo} from 'src/app/shared/model/Photo';
import {Skill} from 'src/app/shared/model/Skill';
import {Requirement} from 'src/app/shared/model/Requirement';
import {Tag} from 'src/app/shared/model/Tag';
import {AbstractInternshipDetailsService} from '../../services/internship-details.service';

@Component({
  selector: 'app-internship-details-page',
  templateUrl: './internship-details-page.component.html',
  styleUrls: ['./internship-details-page.component.scss']
})
export class InternshipDetailsPageComponent implements OnInit {

  public internshipID: string;
  public internshipDetails: Internship;
  public internshipLogo: Photo;
  public internshipTags: Tag[];
  public internshipSkills: Skill[];
  public internshipRequirements: Requirement[]
  public isCompany: boolean
  public isProprietary: boolean

  constructor(private details: AbstractInternshipDetailsService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.internshipID = params.id;
    });
  }

  ngOnInit() {
    this.initialize();
    this.details.getInternship(this.internshipID).subscribe(internship => {this.internshipDetails = internship;
    this.isCompany = !this.details.isApplicant;
    this.isProprietary = this.details.isCompanysInternship});
    this.details.getInternshipLogo(this.internshipID).subscribe(internshipLogo => this.internshipLogo = internshipLogo);
    this.details.getInternshipTags(this.internshipID).subscribe(internshipTags => this.internshipTags = internshipTags);
    this.details.getInternshipSkills(this.internshipID).subscribe(internshipSkils => this.internshipSkills = internshipSkils);
    this.details.getInternshipRequirements(this.internshipID).subscribe(internshipRequirements => this.internshipRequirements = internshipRequirements);
    
  }

  private initialize() {
    this.details.initialize();
  }
}
