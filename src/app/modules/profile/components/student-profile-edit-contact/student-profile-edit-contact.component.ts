import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Applicant} from '../../../../shared/model/Applicant';
import {AbstractStudentProfileService} from '../../services/student-profile.service';

@Component({
  selector: 'app-student-profile-edit-contact',
  templateUrl: './student-profile-edit-contact.component.html',
  styleUrls: ['./student-profile-edit-contact.component.scss']
})
export class StudentProfileEditContactComponent implements OnInit {
  @Output() editSubmitEventEmitter = new EventEmitter();
  applicant: Applicant;

  constructor(private studentProfileService: AbstractStudentProfileService,
              public dialogRef: MatDialogRef<StudentProfileEditContactComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicant = JSON.parse(JSON.stringify(data.studentProfile));
  }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.studentProfileService.updateStudentProfileContact(this.applicant)
      .subscribe(() => {
        this.updateEmail();
      });
  }

  updateEmail(){
    this.studentProfileService.updateStudentProfileEmail(this.applicant)
      .subscribe(() => {
        this.editSubmitEventEmitter.emit();
        this.dialogRef.close();
      });
  }
}
