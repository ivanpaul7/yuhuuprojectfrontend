import {Injectable} from '@angular/core';
import {SessionManagementService} from '../../../shared/utils/session-management.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

import {Company} from '../../../shared/model/Company';

@Injectable({
  providedIn: 'root'
})
export class CompanyDashboardService {

  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api/company/';

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
}
