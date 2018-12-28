import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {Applicant} from '../../../../shared/model/Applicant';
import {AbstractStudentProfileService} from '../../services/student-profile.service';
import {MatDialog} from '@angular/material';
import {StudentProfileEditComponentComponent} from '../../components/student-profile-edit-component/student-profile-edit-component.component';
import {StudentProfileEditBasicComponent} from '../../components/student-profile-edit-basic/student-profile-edit-basic.component';
import {StudentProfileEditContactComponent} from '../../components/student-profile-edit-contact/student-profile-edit-contact.component';

@Component({
  selector: 'app-student-profile-page',
  templateUrl: './student-profile-page.component.html',
  styleUrls: ['./student-profile-page.component.scss']
})
export class StudentProfilePageComponent implements OnInit {
  @Input() applicant: Applicant;

  constructor(
    private route: ActivatedRoute,
    private studentProfileService: AbstractStudentProfileService,
    private location: Location,
    public dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getStudentProfile();
  }

  getStudentProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentProfileService.getStudentProfile(id)
      .subscribe(profile => {
        this.applicant = profile;
      });

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentProfileEditComponentComponent, {
      width: '90%',
      data: {studentProfile: this.applicant}
    });

    dialogRef.afterClosed().subscribe(result => {
    });

    const sub = dialogRef.componentInstance.editSubmitEventEmitter.subscribe(() => {
      this.getStudentProfile();
    });
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
}
