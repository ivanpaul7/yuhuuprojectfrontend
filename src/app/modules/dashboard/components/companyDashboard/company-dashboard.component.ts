import {Component, OnInit} from '@angular/core';
import {AbstractInternshipsService} from '../../../internships/services/internships.service';
import {CompanyDashboardService} from '../../services/company-dashboard.service';
import {Company} from '../../../../shared/model/Company';
import {Photo} from '../../../../shared/model/Photo';
import {Router} from '@angular/router';
import {SessionManagementService} from '../../../../shared/utils/session-management.service';
import {Internship} from '../../../../shared/model/InternshipEnums';
import {Applicant} from '../../../../shared/model/applicant';


@Component({
  selector: 'app-bar-chart-demo',
  templateUrl: './company-dashboard.component.html',
  styleUrls: ['./company-dashboard.component.scss'],
})
export class CompanyDashboardComponent implements OnInit {
  logo: string;
  company: Company;
  id1: number;
  id2: number;
  id3: number;
  name1: string;
  name2: string;
  name3: string;
  photo1: string;
  photo2: string;
  photo3: string;
  age1: number;
  age2: number;
  age3: number;


  constructor(private companyDashboardService: CompanyDashboardService,
              public sessionManagementService: SessionManagementService, public router: Router) {
  }

  ngOnInit() {
    this.companyDashboardService.getCompanyPhoto().subscribe(
      (data: Photo) => this.logo = data.url,
      error => console.log(error)
    );

    this.companyDashboardService.getCompanyDetails().subscribe(
      (data: Company) => this.company = data,
      error => console.log(error)
    );

    this.companyDashboardService.getApplicants().subscribe(((applicants: Applicant[]) => {
      for (let i = 0; i < 3; i++) {
        if (i === 0) {
          this.id1 = applicants[i].id;
          const parts = applicants[i].birthday.toString().split('-');
          this.age1 = 2019 - Number(parts[0]);
          this.name1 = applicants[i].firstName + ' ' + applicants[i].lastName;
          this.companyDashboardService.getApplicantPhoto(applicants[i].id).subscribe(
            (data: Photo) => this.photo1 = data.url,
            error => console.log(error)
          );
        }
        if (i === 1) {
          this.id2 = applicants[i].id;
          const parts = applicants[i].birthday.toString().split('-');
          this.age2 = 2019 - Number(parts[0]);
          this.name2 = applicants[i].firstName + ' ' + applicants[i].lastName;
          this.companyDashboardService.getApplicantPhoto(applicants[i].id).subscribe(
            (data: Photo) => this.photo2 = data.url,
            error => console.log(error)
          );
        }
        if (i === 2) {
          this.id3 = applicants[i].id;
          const parts = applicants[i].birthday.toString().split('-');
          this.age3 = 2019 - Number(parts[0]);
          this.name3 = applicants[i].firstName + ' ' + applicants[i].lastName;
          this.companyDashboardService.getApplicantPhoto(applicants[i].id).subscribe(
            (data: Photo) => this.photo3 = data.url,
            error => console.log(error)
          );
        }
      }
    }), error => console.log(error));
  }

  goToCompany() {
    this.router.navigate(['/profile/company/' + this.sessionManagementService.getSpecificId()]);
  }

  goToApplicant() {
    this.router.navigate(['/profile/student/' + this.id1]);
  }

  goToApplicant2() {
    this.router.navigate(['/profile/student/' + this.id2]);
  }

  goToApplicant3() {
    this.router.navigate(['/profile/student/' + this.id3]);
  }

}


