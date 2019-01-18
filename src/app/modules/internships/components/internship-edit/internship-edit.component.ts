import {Component, OnInit, EventEmitter, Inject, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {AbstractInternshipDetailsService} from '../../services/internship-details.service';
import {DatePipe} from '@angular/common';
import {Internship} from 'src/app/shared/model/InternshipEnums';

@Component({
  selector: 'app-internship-edit',
  templateUrl: './internship-edit.component.html',
  styleUrls: ['./internship-edit.component.scss']
})
export class InternshipEditComponent implements OnInit {

  @Output() editSubmitEventEmitter = new EventEmitter();
  internship: Internship;

  constructor(
    public datepipe: DatePipe,
    private internshipService: AbstractInternshipDetailsService,
    public dialogRef: MatDialogRef<InternshipEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
    this.internship = data.internship;
  }

  onNoClick() {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initialize();
  }

  onSaveClick() {
    // this.internship.birthday = new Date(this.datepipe.transform(this.internship.birthday, 'yyyy-MM-dd'));
    // this.studentProfileService.updateStudentProfileBasic(this.internship)
    //   .subscribe(() => {
    //     this.editSubmitEventEmitter.emit();
    //     this.dialogRef.close();
    //   });
  }

  private initialize() {
    this.internshipService.initialize();
  }
}
