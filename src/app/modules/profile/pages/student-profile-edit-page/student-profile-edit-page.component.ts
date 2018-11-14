import {Component, Inject, OnInit} from '@angular/core';
import {MatFormField} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {StudentProfile} from '../../StudentProfile';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import {StudentProfileService} from '../../student-profile.service';
@Component({
  selector: 'app-student-profile-edit-page',
  templateUrl: './student-profile-edit-page.component.html',
  styleUrls: ['./student-profile-edit-page.component.scss']
})
export class StudentProfileEditPageComponent implements OnInit {
  studentProfileTemp: StudentProfile;
  studentProfile: StudentProfile;
  lastName = new FormControl('');

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    faculty: new FormControl(''),
    phone: new FormControl(''),
    email: new FormControl(''),
    linkedinPage: new FormControl(''),
    facebookPage: new FormControl(''),
    description: new FormControl('')
  });

  constructor(
    private studentProfileService: StudentProfileService,
    public dialogRef: MatDialogRef<StudentProfileEditPageComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
      this.studentProfile = data.studentProfile;
      this.studentProfileTemp = Object.assign({}, data.studentProfile);
  }


  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onSaveClick() {
    this.studentProfileService.updateStudentProfile(this.studentProfileTemp)
      .subscribe(() => {
        this.dialogRef.close();
        this.studentProfile = this.studentProfileTemp;
      });
  }
}
