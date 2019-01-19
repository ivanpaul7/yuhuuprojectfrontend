import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Internship} from '../../../../shared/model/InternshipEnums';
import {AbstractInternshipDetailsService} from '../../services/internship-details.service';
import {Skill} from '../../../../shared/model/Skill';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-internship-edit-skill',
  templateUrl: './internship-edit-skill.component.html',
  styleUrls: ['./internship-edit-skill.component.scss']
})
export class InternshipEditSkillComponent implements OnInit {
  @Output() editSubmitEventEmitter = new EventEmitter();
  internship: Internship;
  skill: Skill = {};
  allSkills: Skill[] = [];
  filteredOptions: Observable<Skill[]>;
  myControl = new FormControl();

  constructor(
    private internshipService: AbstractInternshipDetailsService,
    public dialogRef: MatDialogRef<InternshipEditSkillComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.internship = Object.assign({}, data.internship);
    internshipService.getListAllSkills().subscribe(
      (data) => {
        this.allSkills = data;
      }
    );
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.internshipService.initialize();
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
    this.internshipService.addSkill(this.internship,this.skill)
      .subscribe(() => {
        this.editSubmitEventEmitter.emit();
        this.dialogRef.close();
      }, (error) => {
      });
}
}
