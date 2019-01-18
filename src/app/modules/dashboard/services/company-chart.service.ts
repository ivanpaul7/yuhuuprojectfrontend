import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionManagementService} from '../../../shared/utils/session-management.service';
import {Observable} from 'rxjs';
import {ChatComment} from '../../../shared/model/chatComment';
import {Internship} from '../../../shared/model/InternshipEnums';
import {Applicant} from '../../../shared/model/applicant';

@Injectable({
  providedIn: 'root'
})
export class CompanyChartService {

  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api/internship/';

  constructor(private http: HttpClient, private sessionManagementService: SessionManagementService) {
  }

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Authorization': this.sessionManagementService.getToken()
      })
  };

  public getInternshipsForCompany(): Observable<Internship[]>  {

    const fullUrl = this.url + 'all/company/' + this.sessionManagementService.getSpecificId();

    return this.http.get<Internship[]>(fullUrl, this.httpOptions);
  }

  public getApplicantsForInternship(internshipId: number): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(this.url + internshipId + '/applicants', this.httpOptions);
  }
}
