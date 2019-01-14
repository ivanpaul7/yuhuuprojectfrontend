import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Applicant} from '../../../../shared/model/Applicant';
import {AbstractStudentProfileService} from '../../services/student-profile.service';
import {Skill} from '../../../../shared/model/Skill';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-student-profile-edit-skills',
  templateUrl: './student-profile-edit-skills.component.html',
  styleUrls: ['./student-profile-edit-skills.component.scss']
})
export class StudentProfileEditSkillsComponent implements OnInit {
  @Output() editSubmitEventEmitter = new EventEmitter();
  applicant: Applicant;
  skill: Skill = {};
  allSkills: Skill[] = [];
  filteredOptions: Observable<Skill[]>;
  myControl = new FormControl();

  constructor(
    private studentProfileService: AbstractStudentProfileService,
    public dialogRef: MatDialogRef<StudentProfileEditSkillsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.applicant = Object.assign({}, data.studentProfile);
    studentProfileService.getListAllSkills().subscribe(
      (data) => {
        this.allSkills = data;
        //this.options=this.allSkills.map
        console.log(this.allSkills);
      }
    );

  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): Skill[] {
    const filterValue = value.toLowerCase();

    return this.allSkills.filter(option => option.name.toLowerCase().includes(filterValue));
  }

  onSaveClick() {
    this.studentProfileService.addSkill(this.skill)
      .subscribe(() => {
        this.editSubmitEventEmitter.emit();
        this.dialogRef.close();
      }, (error) => {
        //todo treat error
      });
  }

}
