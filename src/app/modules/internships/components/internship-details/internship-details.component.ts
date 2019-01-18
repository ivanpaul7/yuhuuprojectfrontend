import {Component, Input, OnInit} from '@angular/core';
import {Internship} from 'src/app/shared/model/InternshipEnums';
import {Photo} from 'src/app/shared/model/Photo';
import {Skill} from 'src/app/shared/model/Skill';
import {Tag} from 'src/app/shared/model/Tag';
import {MatDialog} from '@angular/material';
import {InternshipEditComponent} from '../internship-edit/internship-edit.component';


@Component({
  selector: 'app-internship-details',
  templateUrl: './internship-details.component.html',
  styleUrls: ['./internship-details.component.scss']
})
export class InternshipDetailsComponent implements OnInit {

  @Input() internshipDetails: Internship;
  @Input() internshipLogo: Photo;
  @Input() internshipTags: Tag[];
  @Input() internshipSkills: Skill[];


  constructor(public dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public openEditDialog() {
    const dialogRef = this.dialog.open(InternshipEditComponent, {
      width: '90%',
      data: {internship: this.internshipDetails}
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }
}
