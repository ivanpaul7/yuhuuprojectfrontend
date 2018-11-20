import {Component, Inject, OnInit, EventEmitter, Output} from '@angular/core';
import {MatFormField} from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {StudentProfile} from '../../services/StudentProfile';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import {StudentProfileService} from '../../services/student-profile.service';

@Component({
  selector: 'app-student-profile-edit-component',
  templateUrl: './student-profile-edit-component.component.html',
  styleUrls: ['./student-profile-edit-component.component.scss']
})
export class StudentProfileEditComponentComponent implements OnInit {
  @Output() onEditSubmit = new EventEmitter();

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
    public dialogRef: MatDialogRef<StudentProfileEditComponentComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
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
        this.studentProfile = this.studentProfileTemp;
        this.onEditSubmit.emit();
        this.dialogRef.close();
      });
  }
}
