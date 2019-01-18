import {Component, OnInit} from '@angular/core';
import {AbstractIntershipsForDashboardServicesService} from '../../services/interships-services.service';
import {InternshipRequest} from '../../../../shared/model/InternshipRequest';
import {Router} from '@angular/router';

@Component({
  selector: 'app-internships-list-for-applicant',
  templateUrl: './internships-list-for-applicant.component.html',
  styleUrls: ['./internships-list-for-applicant.component.scss']
})
export class InternshipsListForApplicantComponent implements OnInit {
  internshipList: InternshipRequest[];

  constructor(private internshipService: AbstractIntershipsForDashboardServicesService, private router: Router) {
  }

  ngOnInit() {
    this.getInternships();
  }

  private getInternships() {
    this.internshipService.initialize();
    this.internshipService.getInternshipsForApplicant().subscribe(data => {
      this.internshipList = data;
    });
  }

  redirectToInternshipPage(id: number) {
    this.router.navigateByUrl('/internships/' + id);
  }
}
