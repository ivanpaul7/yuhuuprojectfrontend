import {Component, Input, OnInit} from '@angular/core';
import {AbstractInternshipDetailsService} from '../../services/internship-details.service';
import {Applicant} from '../../../../shared/model/applicant';
import {InternshipRequest} from '../../../../shared/model/InternshipRequest';
import {IntershipStatusRequestStringEnum} from '../../../../shared/model/IntershipStatusRequest';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {InternshipEditComponent} from '../internship-edit/internship-edit.component';
import {RequestMessageSenderComponent} from '../request-message-sender/request-message-sender.component';

@Component({
  selector: 'app-applicants-management',
  templateUrl: './applicants-management.component.html',
  styleUrls: ['./applicants-management.component.scss']
})
export class ApplicantsManagementComponent implements OnInit {

  @Input()
  internshipId: number;
  internshipStatus = IntershipStatusRequestStringEnum;
  requestsList: InternshipRequest[] = [];

  constructor(private internshipService: AbstractInternshipDetailsService,
              private router: Router,
              public dialog: MatDialog) {
  }

  ngOnInit() {
    this.internshipService.getRequestsForInternship(this.internshipId).subscribe((data) => {
      this.requestsList = data;
    }, (error) => {
      console.log(error);
    });
  }

  isDisabled(value: IntershipStatusRequestStringEnum) {
    if (value === IntershipStatusRequestStringEnum.PENDING) {
      return false;
    } else if (value === IntershipStatusRequestStringEnum.REJECTED) {
      return true;
    } else {
      return true;
    }
  }

  valueChanged(request: InternshipRequest, newStatusString: any) {

    let newStatus = this.internshipStatus.PENDING;

    if (newStatusString === 'ACCEPTED') {
      newStatus = this.internshipStatus.ACCEPTED;
    } else {
      newStatus = this.internshipStatus.REJECTED;
    }

    const dialogRef = this.dialog.open(RequestMessageSenderComponent, {
      width: '50%',
      data: {
        requestId: request.id,
        newStatus: newStatus
      }
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('closed');
    });

  }

  goToCandidateProfile(applicantId: number) {
    this.router.navigate(['/profile/student/' + applicantId]);
  }

}
