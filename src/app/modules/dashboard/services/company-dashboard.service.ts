import {Injectable} from '@angular/core';
import {SessionManagementService} from '../../../shared/utils/session-management.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Company} from '../../../shared/model/Company';
import {ApplicantDashboardComponent} from '../components/applicantDashboard/applicant-dashboard.component';
import {Applicant} from '../../../shared/model/applicant';

@Injectable({
  providedIn: 'root'
})
export class CompanyDashboardService {

  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api/company/';
  private url2 = 'https://enigmatic-sierra-91538.herokuapp.com/api/applicant/lastregistered/3';
  private url3 = 'https://enigmatic-sierra-91538.herokuapp.com/api/applicant/';

  constructor(private http: HttpClient, private sessionManagementService: SessionManagementService) {

  }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Authorization': this.sessionManagementService.getToken()
      })
  };

  public getCompanyPhoto() {

    const fullUrl = this.url + this.sessionManagementService.getSpecificId() + '/photo';

    return this.http.get(fullUrl, this.httpOptions);
  }

  public getCompanyDetails(): Observable<Company> {
    const fullUrl = this.url + 'details/' + this.sessionManagementService.getSpecificId();

    return this.http.get(fullUrl, this.httpOptions);
  }

  public getApplicants(): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(this.url2, this.httpOptions);
  }

  public getApplicantPhoto(id: number) {
    const fullUrl = this.url3 + id + '/photo';
    return this.http.get(fullUrl, this.httpOptions);
  }
}
