import {Injectable} from '@angular/core';
import {Internship} from 'src/app/shared/model/InternshipEnums';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Photo} from 'src/app/shared/model/Photo';
import {Tag} from 'src/app/shared/model/Tag';
import {Skill} from 'src/app/shared/model/Skill';
import {SessionManagementService} from '../../../shared/utils/session-management.service';
import {Role} from '../../../shared/model/Role';


@Injectable()
export abstract class AbstractInternshipDetailsService {
  public abstract initialize();

  public abstract getInternship(internshipID: string): Observable<Internship>;

  public abstract getInternshipLogo(internshipID: string): Observable<Photo>;

  public abstract getInternshipTags(internshipID: string): Observable<Tag[]>;

  public abstract getInternshipSkills(internshipID: string): Observable<Skill[]>;

  public abstract applyToInternship(int: number): Observable<Internship>;

  public abstract updateInternship(internship: Internship): Observable<Internship>;
}

export class ServerInternshipDetailsService implements AbstractInternshipDetailsService {
  applicantID: number;
  isApplicant: boolean;
  isUsersProfile: boolean = true;


  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer x'
      })
  };
  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api

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

  public getInternship(internshipID: string): Observable<Internship> {
    return this.http.get<Internship>(this.url + '/internship/details/' + internshipID, this.httpOptions).pipe(
      tap(() => console.log(`fetched Internship id#${internshipID}`)),
      catchError(this.handleError<Internship>(`getInternship failed ${internshipID}`)));
  }

  public getInternshipLogo(internshipID: string): Observable<Photo> {
    return this.http.get<Photo>(this.url + '/internship/' + internshipID + '/logo', this.httpOptions).pipe(
      tap(() => console.log(`fetched InternshipLogo id#${internshipID}`)),
      catchError(this.handleError<Photo>(`getInternshipLogo failed ${internshipID}`)));
  }

  public getInternshipTags(internshipID: string): Observable<Tag[]> {
    return this.http.get<Tag[]>(this.url + '/internship/' + internshipID + '/tags', this.httpOptions).pipe(
      tap(() => console.log(`fetched InternshipLogo id#${internshipID}`)),
      catchError(this.handleError<Tag[]>(`getInternshipLogo failed ${internshipID}`)));
  }

  public getInternshipSkills(internshipID: string): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url + '/internship/' + internshipID + '/skills', this.httpOptions).pipe(
      tap(() => console.log(`fetched InternshipLogo id#${internshipID}`)),
      catchError(this.handleError<Skill[]>(`getInternshipLogo failed ${internshipID}`)));
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public applyToInternship(id: number): Observable<Internship> {
    return this.http.post<Internship>(this.url + '/internship/' + id + '/apply', {}, this.httpOptions).pipe(
      tap(() => console.log(`apply successful internship id#${id}`)),
      catchError(this.handleError<Internship>(`apply failed ${id}`)));
  }
  public updateInternship(internship: Internship): Observable<Internship> {
    console.log(internship);
    return this.http.put<Internship>(this.url + '/internship/' + internship.id, internship, this.httpOptions).pipe(
      tap(() => console.log(`internship Updated id#${internship.id}`)),
      catchError(this.handleError<Internship>(`internship Updated failed ${internship.id}`)));
  }

}

export class MockInternshipDetailsService implements AbstractInternshipDetailsService {
  public updateInternship(internship: Internship): Observable<Internship> {
    throw new Error("Method not implemented.");
  }

  internship: Internship = {
    'id': 1,
    'active': true,
    'title': 'InternshipTitle',
    'description': null,
    'startDate': new Date('2018-11-16'),
    'endDate': new Date('2019-03-16'),
    'deadline': null,
    'employmentType': null,
    'freeSpots': null,
    'status': null
  };

  public getInternship(internshipID: string): Observable<Internship> {
    return of(this.internship);
  }

  public getInternshipLogo(internshipID: string): Observable<Photo> {
    throw new Error('Method not implemented.');
  }

  public getInternshipTags(internshipID: string): Observable<Tag[]> {
    throw new Error('Method not implemented.');
  }

  public getInternshipSkills(internshipID: string): Observable<Skill[]> {
    throw new Error('Method not implemented.');
  }

  applyToInternship(int: number): Observable<Internship> {
    return of({});
  }

  initialize() {
  }
}
