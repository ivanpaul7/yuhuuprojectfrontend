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
import {Applicant} from '../../../shared/model/applicant';
import {InternshipRequest} from '../../../shared/model/InternshipRequest';
import {IntershipStatusRequestStringEnum} from '../../../shared/model/IntershipStatusRequest';
import {Requirement} from "../../../shared/model/Requirement"
import { Company } from 'src/app/shared/model/models';
import { companyNavBarItems } from 'src/app/app.module';


@Injectable()
export abstract class AbstractInternshipDetailsService {
  public isApplicant: boolean;
  public isCompanysInternship: boolean = true;

  public abstract initialize();

  public abstract getInternship(internshipID: string): Observable<Internship>;

  public abstract getInternshipLogo(internshipID: string): Observable<Photo>;

  public abstract getInternshipTags(internshipID: string): Observable<Tag[]>;

  public abstract getInternshipSkills(internshipID: string): Observable<Skill[]>;

  public abstract getInternshipRequirements(internshipID: string): Observable<Requirement[]>;

  public abstract getInternshipCompany(internshipID: string): Observable<Company>;

  public abstract applyToInternship(int: number): Observable<Internship>;

  public abstract updateInternship(internship: Internship): Observable<Internship>;

  public abstract getListAllSkills() : Observable<Skill[]>;

  public abstract addSkill(internship: Internship, skill: Skill): Observable<Skill>;

  public abstract deleteSkill(internship: Internship,id: number): Observable<Skill>;

  public abstract addRequirement(internship: Internship, requirement: Requirement): Observable<Requirement>;

  public abstract deleteRequirement(internship: Internship,id: number): Observable<Requirement>;

  public abstract addInternship(internship: Internship): Observable<Internship>;

  public abstract getApplicantsForInternship(internshipId: number): Observable<Applicant[]>;

  public abstract getRequestsForInternship(internshipId: number): Observable<InternshipRequest[]>;

  public abstract changeRequestStatus(requestId: number, subject: string, content: string, newStatus: IntershipStatusRequestStringEnum);
}


export class ServerInternshipDetailsService implements AbstractInternshipDetailsService {
  specificID: number;
  isApplicant: boolean;
  isUsersProfile: true;

  public isApplicant: boolean;
  public isCompanysInternship: boolean = true;
  allSkills: Skill[];

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': this.sessionManager.getToken()
      })
  };
  private url;
  constructor(private http: HttpClient, private sessionManager: SessionManagementService) {
  this.url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api

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
      this.specificID = this.sessionManager.getSpecificId();
      this.isApplicant = this.sessionManager.getLoggedUserRole() == Role.RoleStringEnum.APPLICANT;
    } else {
      // todo redirect to login :)
    }

  }

  public getInternshipCompany(internshipID: string): Observable<Company> {
    this.getInternshipCompany(internshipID).subscribe((company) =>
    {
      if ((this.isApplicant) || company.id === this.specificID) {
        this.isCompanysInternship = false;
      }
    })


    return this.http.get<Company>(this.url + '/internship/details/' + internshipID, this.httpOptions).pipe(
      tap(() => {}),
      catchError(this.handleError<Internship>(`getInternshipCompany failed ${internshipID}`)));
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
      tap(() => console.log(`fetched InternshipTags id#${internshipID}`)),
      catchError(this.handleError<Tag[]>(`getInternshipTags failed ${internshipID}`)));
  }

  public getInternshipSkills(internshipID: string): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url + '/internship/' + internshipID + '/skills', this.httpOptions).pipe(
      tap(() => console.log(`fetched InternshipSkills id#${internshipID}`)),
      catchError(this.handleError<Skill[]>(`InternshipSkills failed ${internshipID}`)));
  }

  public getInternshipRequirements(internshipID: string): Observable<Requirement[]> {
    return this.http.get<Requirement[]>(this.url + '/internship/' + internshipID + '/requirements', this.httpOptions).pipe(
      tap(() => console.log(`fetched InternshipRequirements id#${internshipID}`)),
      catchError(this.handleError<Skill[]>(`getInternshipRequirements failed ${internshipID}`)));
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
  addInternship(internship: Internship): Observable<Internship> {
    return this.http.post<Internship>(this.url + '/internship/create',
      {
        'company': {
          'id': this.specificID
        },
        'internship': internship
      },
      this.httpOptions).pipe(
      tap(
        (data) => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  getApplicantsForInternship(internshipId: number): Observable<Applicant[]> {
    return this.http.get<Applicant[]>(this.url + '/internship/' + internshipId + '/applicants', this.httpOptions);
  }

  getRequestsForInternship(internshipId: number): Observable<InternshipRequest[]> {
    return this.http.get<InternshipRequest[]>(this.url + '/internship/' + internshipId + '/internshipRequests', this.httpOptions);
  }

  changeRequestStatus(requestId: number, subject: string, content: string, newStatus: IntershipStatusRequestStringEnum) {
    return this.http.put<void>(this.url + '/company/' + requestId + '/status',
      {
        subject: subject,
        content: content,
        internshipRequestStatus: newStatus
      },
      this.httpOptions);
  }
  public getListAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url + '/skill/all', this.httpOptions).pipe(
      tap(data => {this.allSkills = data;}, error => {console.log(error); }));
  }

  addSkill(internship: Internship, skill: Skill): Observable<Internship> {
    return this.http.put<Internship>(this.url + '/internship/' + internship.id + '/skill', skill, this.httpOptions).pipe(
      tap(data => {},error => {}));
  }

  deleteSkill(internship: Internship,id: number): Observable<Internship> {
    return this.http.delete<Internship>(this.url + '/internship/' + internship.id + '/skills/' + id, this.httpOptions).pipe(
      tap(data => {},error => {}));
  }

  public addRequirement(internship: Internship, requirement: Requirement): Observable<Requirement> {
    return this.http.put<Requirement>(this.url + '/internship/' + internship.id + '/requirement', requirement, this.httpOptions).pipe(
      tap(data => {},error => {}));
  }
  public deleteRequirement(internship: Internship, id: number): Observable<Requirement> {
    return this.http.delete<Requirement>(this.url + '/internship/' + internship.id + '/requirements/' + id, this.httpOptions).pipe(
      tap(data => {},error => {}));
  }

}

export class MockInternshipDetailsService implements AbstractInternshipDetailsService {
  public isApplicant: boolean;
  public isCompanysInternship: boolean;
  public getInternshipCompany(internshipID: string): Observable<Company> {
    throw new Error("Method not implemented.");
  }
  '': any;
  public getInternshipRequirements(internshipID: string): Observable<Requirement[]> {
    throw new Error("Method not implemented.");
  }
  public getListAllSkills(): Observable<Skill[]> {
    throw new Error("Method not implemented.");
  }
  public addRequirement(internship: Internship, skill: Skill): Observable<Requirement> {
    throw new Error("Method not implemented.");
  }
  public deleteRequirement(internship: Internship, id: number): Observable<Requirement> {
    throw new Error("Method not implemented.");
  }
  public addSkill(internship: Internship, skill: Skill): Observable<Skill> {
    throw new Error("Method not implemented.");
  }
  public deleteSkill(internship: Internship, id: number): Observable<Skill> {
    throw new Error("Method not implemented.");
  }
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

  addInternship(internship: Internship): Observable<Internship> {
    return of({});
  }

  getApplicantsForInternship(internshipId: number): Observable<Applicant[]> {
    return undefined;
  }

  getRequestsForInternship(internshipId: number): Observable<InternshipRequest[]> {
    return undefined;
  }

  changeRequestStatus(requestId: number, subject: string, content: string, newStatus: IntershipStatusRequestStringEnum) {
  }
}
