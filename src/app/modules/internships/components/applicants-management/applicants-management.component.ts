import {Component, Input, OnInit} from '@angular/core';
import {AbstractInternshipDetailsService} from '../../services/internship-details.service';
import {Applicant} from '../../../../shared/model/applicant';
import {InternshipRequest} from '../../../../shared/model/InternshipRequest';
import {IntershipStatusRequestStringEnum} from '../../../../shared/model/IntershipStatusRequest';
import {Router} from '@angular/router';

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
              private router: Router) {
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

  valueChanged(request: InternshipRequest, newStatus: any) {
    if (newStatus === 'ACCEPTED') {
      this.internshipService.changeRequestStatus(request.id, 'ni mail', 'content', this.internshipStatus.ACCEPTED).subscribe();
    } else {
      this.internshipService.changeRequestStatus(request.id, 'ni mail', 'content', this.internshipStatus.REJECTED).subscribe();
    }
  }

  goToCandidateProfile(applicantId: number) {
    this.router.navigate(['/profile/student/' + applicantId]);
  }

}
