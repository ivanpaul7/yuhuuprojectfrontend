import {Component, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {StudentProfile} from '../../services/StudentProfile';
import {AbstractStudentProfileService} from '../../services/student-profile.service';

@Component({
  selector: 'app-student-profile-edit-component',
  templateUrl: './student-profile-edit-component.component.html',
  styleUrls: ['./student-profile-edit-component.component.scss']
})
export class StudentProfileEditComponentComponent {
  @Output() editSubmitEventEmitter = new EventEmitter();

  studentProfileTemp: StudentProfile;

  constructor(
    private studentProfileService: AbstractStudentProfileService,
    public dialogRef: MatDialogRef<StudentProfileEditComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.studentProfileTemp = Object.assign({}, data.studentProfile);
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.studentProfileService.updateStudentProfile(this.studentProfileTemp)
      .subscribe(() => {
        this.editSubmitEventEmitter.emit();
        this.dialogRef.close();
      });
  }
}
