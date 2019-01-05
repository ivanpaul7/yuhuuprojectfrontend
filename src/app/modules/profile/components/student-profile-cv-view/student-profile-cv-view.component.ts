import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Applicant} from '../../../../shared/model/Applicant';
import {AbstractStudentProfileService} from '../../services/student-profile.service';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@Component({
  selector: 'app-student-profile-cv-view',
  templateUrl: './student-profile-cv-view.component.html',
  styleUrls: ['./student-profile-cv-view.component.scss']
})
export class StudentProfileCvViewComponent implements OnInit {
  applicant: Applicant;

  constructor(
    public dialogRef: MatDialogRef<StudentProfileCvViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicant = JSON.parse(JSON.stringify(data.studentProfile));
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
