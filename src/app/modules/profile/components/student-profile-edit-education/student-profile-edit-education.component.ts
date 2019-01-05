import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Applicant} from '../../../../shared/model/Applicant';
import {AbstractStudentProfileService} from '../../services/student-profile.service';
import {DatePipe} from '@angular/common';
import {Education} from '../../../../shared/model/Education';

@Component({
  selector: 'app-student-profile-edit-education',
  templateUrl: './student-profile-edit-education.component.html',
  styleUrls: ['./student-profile-edit-education.component.scss']
})
export class StudentProfileEditEducationComponent implements OnInit {
  @Output() editSubmitEventEmitter = new EventEmitter();
  startDatex = new Date(2010, 0, 1);
  applicant: Applicant;
  education: Education =  {};

  constructor(
    public datepipe: DatePipe,
    private studentProfileService: AbstractStudentProfileService,
    public dialogRef: MatDialogRef<StudentProfileEditEducationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicant = Object.assign({}, data.studentProfile);
  }


  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onSaveClick() {
    this.applicant.birthday =new Date( this.datepipe.transform(this.applicant.birthday, 'yyyy-MM-dd'));
    this.studentProfileService.addEducation(this.applicant.id, this.education)
      .subscribe(() => {
        this.editSubmitEventEmitter.emit();
        this.dialogRef.close();
      });
  }

}
