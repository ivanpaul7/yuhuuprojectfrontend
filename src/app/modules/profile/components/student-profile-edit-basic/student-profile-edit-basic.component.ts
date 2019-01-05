import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Applicant} from '../../../../shared/model/Applicant';
import {AbstractStudentProfileService} from '../../services/student-profile.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-student-profile-edit-basic',
  templateUrl: './student-profile-edit-basic.component.html',
  styleUrls: ['./student-profile-edit-basic.component.scss']
})
export class StudentProfileEditBasicComponent implements OnInit {
  @Output() editSubmitEventEmitter = new EventEmitter();
  startDate = new Date(1990, 0, 1);
  applicant: Applicant;

  constructor(
    public datepipe: DatePipe,
    private studentProfileService: AbstractStudentProfileService,
    public dialogRef: MatDialogRef<StudentProfileEditBasicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicant = JSON.parse(JSON.stringify(data.studentProfile));
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onSaveClick() {
    this.applicant.birthday = new Date(this.datepipe.transform(this.applicant.birthday, 'yyyy-MM-dd'));
    this.studentProfileService.updateStudentProfileBasic(this.applicant)
      .subscribe(() => {
        this.editSubmitEventEmitter.emit();
        this.dialogRef.close();
      });
  }

}
