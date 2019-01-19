import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Internship} from '../../../../shared/model/InternshipEnums';
import {AbstractInternshipDetailsService} from '../../services/internship-details.service';
import {Requirement} from '../../../../shared/model/Requirement';
import {Observable} from 'rxjs';
import {FormControl} from '@angular/forms';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-internship-edit-requirement',
  templateUrl: './internship-edit-requirement.component.html',
  styleUrls: ['./internship-edit-requirement.component.scss']
})
export class InternshipEditRequirementComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  internship: Internship;
  requirement: Requirement = {};
  myControl = new FormControl();

  constructor(
    private internshipService: AbstractInternshipDetailsService,
    public dialogRef: MatDialogRef<InternshipEditRequirementComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.internship = Object.assign({}, data.internship);
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.internshipService.initialize();
  }

  onSaveClick() {
    this.internshipService.addRequirement(this.internship,this.requirement)
      .subscribe(() => {
        this.editSubmitEventEmitter.emit();
        this.dialogRef.close();
      }, (error) => {
      });
}

}
