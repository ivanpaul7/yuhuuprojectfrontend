import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Company} from '../../../../shared/model/Company';
import {AbstractInternshipDetailsService} from '../../services/internship-details.service';
import {Internship, InternshipEnums} from '../../../../shared/model/InternshipEnums';
import EmploymentTypeEnum = InternshipEnums.EmploymentTypeEnum;
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-add-internship',
  templateUrl: './add-internship.component.html',
  styleUrls: ['./add-internship.component.scss']
})
export class AddInternshipComponent implements OnInit {
  @Output() editSubmitEventEmitter = new EventEmitter();
  internship: Internship={};
  internshipsType: EmploymentTypeEnum[]=[EmploymentTypeEnum.FULLTIME, EmploymentTypeEnum.PARTTIME];

  constructor(
    public datepipe: DatePipe,
    private internshipService: AbstractInternshipDetailsService,
    public dialogRef: MatDialogRef<AddInternshipComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.internshipService.initialize();
  }

  onSaveClick() {
    this.internship.startDate = new Date(this.datepipe.transform(this.internship.startDate, 'yyyy-MM-dd'));
    this.internship.endDate = new Date(this.datepipe.transform(this.internship.endDate, 'yyyy-MM-dd'));
    this.internship.deadline = new Date(this.datepipe.transform(this.internship.deadline, 'yyyy-MM-dd'));
    this.internshipService.addInternship(this.internship)
      .subscribe(() => {
        this.editSubmitEventEmitter.emit();
        this.dialogRef.close();
      });
  }
}

