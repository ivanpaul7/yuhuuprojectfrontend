import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {InternshipRequest} from '../../../shared/model/InternshipRequest';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {SessionManagementService} from '../../../shared/utils/session-management.service';
import {Role} from '../../../shared/model/Role';
import {tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export abstract class AbstractIntershipsForDashboardServicesService {
  internshipList: InternshipRequest[];

  public abstract initialize();

  public abstract getInternshipsForApplicant(): Observable<InternshipRequest[]> ;

  public abstract cancelInternship(id: number);
}

//todo mock
export class MockInternshipServiceForDashboardService implements AbstractIntershipsForDashboardServicesService {
  internshipList: InternshipRequest[];

  initialize() {
  }

  getInternshipsForApplicant(): Observable<InternshipRequest[]> {
    return undefined;
  }

  cancelInternship(id: number) {
  }

}


@Injectable({
  providedIn: 'root'
})
export class ServerInternshipServiceForDashboardService implements AbstractIntershipsForDashboardServicesService {
  internshipList: InternshipRequest[];
  applicantID: number;
  isApplicant: boolean;
  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer x'
      })
  };

  constructor(private http: HttpClient, private sessionManager: SessionManagementService) {
  }

  initialize() {
    if (this.sessionManager.isUserLoggedIn()) {
      this.httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization': '' + this.sessionManager.getToken()
          })
      };
      this.applicantID = this.sessionManager.getLoggedUserId();
      this.isApplicant = this.sessionManager.getLoggedUserRole() == Role.RoleStringEnum.APPLICANT;
    } else {
      //todo redirect to login :)
    }
  }

  getInternshipsForApplicant(): Observable<InternshipRequest[]> {
    return this.http.get<InternshipRequest[]>(this.url + '/applicant/internshipRequests', this.httpOptions).pipe(
      tap(
        data => {
          this.internshipList = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  cancelInternship(id: number) {
  }

}
