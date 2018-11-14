import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';

import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { StudentProfile} from '../../StudentProfile';
import { StudentProfileService} from '../../student-profile.service';
import {MatDialog} from '@angular/material';
import {StudentProfileEditPageComponent} from '../student-profile-edit-page/student-profile-edit-page.component';

@Component({
  selector: 'app-student-profile-page',
  templateUrl: './student-profile-page.component.html',
  styleUrls: ['./student-profile-page.component.scss']
})
export class StudentProfilePageComponent implements OnInit {
  @Input() studentProfile: StudentProfile;

  constructor(
    private route: ActivatedRoute,
    private studentProfileService: StudentProfileService,
    private location: Location,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getStudentProfile();
  }

  getStudentProfile(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.studentProfileService.getStudentProfile(id)
      .subscribe(profile => {
        this.studentProfile = profile;
      });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(StudentProfileEditPageComponent, {
      width: '90%',
      data: { studentProfile: this.studentProfile }
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
