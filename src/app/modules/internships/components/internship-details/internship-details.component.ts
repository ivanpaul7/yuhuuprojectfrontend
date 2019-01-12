import {Component, Input, OnInit} from '@angular/core';
import {Internship} from 'src/app/shared/model/internships.model';
import { Photo } from 'src/app/shared/model/Photo';
import { Skill } from 'src/app/shared/model/Skill';
import { Tag } from 'src/app/shared/model/Tag';

@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.component.html',
  styleUrls: ['./internship-details.component.scss']
})
export class InternshipDetailsComponent implements OnInit {

  @Input() internshipDetails: Internship;
  @Input() internshipLogo: Photo;
  @Input() internshipTags: Tag[];
  @Input() internshipSkills: Skill[];

  constructor() {
  }

  ngOnInit() {
  }


}
