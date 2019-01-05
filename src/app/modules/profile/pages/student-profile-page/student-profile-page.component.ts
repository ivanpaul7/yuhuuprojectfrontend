import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Applicant} from '../../../../shared/model/Applicant';
import {AbstractStudentProfileService} from '../../services/student-profile.service';
import {MatDialog, MatListModule} from '@angular/material';
import {StudentProfileEditBasicComponent} from '../../components/student-profile-edit-basic/student-profile-edit-basic.component';
import {StudentProfileEditContactComponent} from '../../components/student-profile-edit-contact/student-profile-edit-contact.component';
import {Education} from '../../../../shared/model/Education';
import {EducationComponent} from '../../components/education/education.component';
import {StudentProfileEditEducationComponent} from '../../components/student-profile-edit-education/student-profile-edit-education.component';
import {Skill} from '../../../../shared/model/Skill';
import {StudentProfileEditSkillsComponent} from '../../components/student-profile-edit-skills/student-profile-edit-skills.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import {StudentProfileCvViewComponent} from '../../components/student-profile-cv-view/student-profile-cv-view.component';

@Component({
  selector: 'app-student-profile-page',
  templateUrl: './student-profile-page.component.html',
  styleUrls: ['./student-profile-page.component.scss']
})
export class StudentProfilePageComponent implements OnInit {
  @Input() applicant: Applicant;
  @Input() educationList: Education[];
  @Input() skillsList: Skill[];

  constructor(
    private route: ActivatedRoute,
    private studentProfileService: AbstractStudentProfileService,
    private location: Location,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getStudentProfile();
    this.getEducation();
    this.getSkills();
  }

  public getStudentProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentProfileService.getStudentProfile(id)
      .subscribe(profile => {
        this.applicant = profile;
      });

  }

  public getEducation() {
    this.studentProfileService.getEducationForApplicant(this.applicant.id).subscribe(
      list => {
        this.educationList = list;
      }
    );
  }

  private getSkills() {
    this.studentProfileService.getSkillsForApplicant().subscribe(
      list => {
        this.skillsList = list;
      }
    );
  }

  openBasicEditDialog() {
    const dialogRef = this.dialog.open(StudentProfileEditBasicComponent, {
      width: '90%',
      data: {studentProfile: this.applicant}
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      this.getStudentProfile();
    });
  }

  openContactEditDialog() {
    const dialogRef = this.dialog.open(StudentProfileEditContactComponent, {
      width: '90%',
      data: {studentProfile: this.applicant}
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      this.getStudentProfile();
    });
  }


  openAddEducationDialog() {
    const dialogRef = this.dialog.open(StudentProfileEditEducationComponent, {
      width: '90%',
      data: {studentProfile: this.applicant}
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      this.getEducation();
    });
  }

  deleteEducation(id: number) {
    this.studentProfileService.deleteEducation(id).subscribe(() => {
      this.getEducation();
    });
  }

  openAddSkillDialog() {
    const dialogRef = this.dialog.open(StudentProfileEditSkillsComponent, {
      width: '90%',
      data: {studentProfile: this.applicant}
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      this.getEducation();
    });
  }

  deleteSkill(id: number) {
    this.studentProfileService.deleteSkill(id).subscribe(() => {
      this.getSkills();
    });
  }

  openCV() {
    const dialogRef = this.dialog.open(StudentProfileCvViewComponent, {
      width: '95%',
      height:'95%',
      data: {studentProfile: this.applicant}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
