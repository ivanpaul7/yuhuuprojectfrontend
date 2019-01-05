import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Applicant} from '../../../../shared/model/Applicant';
import {AbstractStudentProfileService} from '../../services/student-profile.service';
import {Skill} from '../../../../shared/model/Skill';

@Component({
  selector: 'app-student-profile-edit-skills',
  templateUrl: './student-profile-edit-skills.component.html',
  styleUrls: ['./student-profile-edit-skills.component.scss']
})
export class StudentProfileEditSkillsComponent implements OnInit {
  @Output() editSubmitEventEmitter = new EventEmitter();
  startDatex = new Date(2010, 0, 1);
  applicant: Applicant;
  skill: Skill = new Skill();

  constructor(
    private studentProfileService: AbstractStudentProfileService,
    public dialogRef: MatDialogRef<StudentProfileEditSkillsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicant = Object.assign({}, data.studentProfile);
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  onSaveClick() {
    this.studentProfileService.addSkill(this.skill)
      .subscribe(() => {
        this.editSubmitEventEmitter.emit();
        this.dialogRef.close();
      });
  }

}
