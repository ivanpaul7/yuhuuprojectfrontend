import {Component, Input, OnInit} from '@angular/core';
import {Internship} from 'src/app/shared/model/InternshipEnums';
import {Photo} from 'src/app/shared/model/Photo';
import {Skill} from 'src/app/shared/model/Skill';
import {Tag} from 'src/app/shared/model/Tag';
import {MatDialog} from '@angular/material';
import {InternshipEditComponent} from '../internship-edit/internship-edit.component';
import {AbstractInternshipDetailsService} from '../../services/internship-details.service';
import { InternshipEditSkillComponent } from '../internship-edit-skill/internship-edit-skill.component';
import { Requirement } from 'src/app/shared/model/models';
import { InternshipEditRequirementComponent } from '../internship-edit-requirement/internship-edit-requirement.component';


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
  @Input() internshipRequirements: Requirement[];
  @Input() isCompany: boolean;
  @Input() isProprietary: boolean;


  constructor(public dialog: MatDialog, private internshipDetailsService: AbstractInternshipDetailsService) {
  }

  ngOnInit() {
    this.intialize();
  }

  public openEditDialog() {
    const dialogRef = this.dialog.open(InternshipEditComponent, {
      width: '90%',
      data: {internship: this.internshipDetails}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
    dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      this.internshipDetailsService.getInternship(this.internshipDetails.id.toString());
    });
  }

  applyForInternship(id: number) {
    this.internshipDetailsService.applyToInternship(id).subscribe(() => {
    });
  }

  private intialize() {
    this.internshipDetailsService.initialize();
  }

  openAddSkill() {
    const dialogRef = this.dialog.open(InternshipEditSkillComponent, {
      width: '90%',
      data: {internship: this.internshipDetails}
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      this.internshipDetailsService.getInternshipSkills(this.internshipDetails.id.toString()).subscribe((skills) => {
        this.internshipSkills = skills;
      });
    });
  }

  deleteSkill(id: number) {
    this.internshipDetailsService.deleteSkill(this.internshipDetails, id).subscribe(() => {""
      this.internshipDetailsService.getInternshipSkills(this.internshipDetails.id.toString()).subscribe((skills) => {
        this.internshipSkills = skills;
      });
    });
  }

  openAddRequirement() {
    const dialogRef = this.dialog.open(InternshipEditRequirementComponent, {
      width: '90%',
      data: {internship: this.internshipDetails}
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      this.internshipDetailsService.getInternshipRequirements(this.internshipDetails.id.toString()).subscribe((requirements) => {
        this.internshipRequirements = requirements;
      });
    });
  }

  deleteRequirement(id: number) {
    this.internshipDetailsService.deleteRequirement(this.internshipDetails, id).subscribe(() => {""
      this.internshipDetailsService.getInternshipRequirements(this.internshipDetails.id.toString()).subscribe((requirements) => {
        this.internshipRequirements = requirements;
      });
    });
  }

}
