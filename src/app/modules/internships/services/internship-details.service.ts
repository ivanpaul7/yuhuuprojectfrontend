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
import {Requirement} from "../../../shared/model/Requirement"


@Injectable()
export abstract class AbstractInternshipDetailsService {
  public abstract initialize();

  public abstract getInternship(internshipID: string): Observable<Internship>;

  public abstract getInternshipLogo(internshipID: string): Observable<Photo>;

  public abstract getInternshipTags(internshipID: string): Observable<Tag[]>;

  public abstract getInternshipSkills(internshipID: string): Observable<Skill[]>;

  public abstract getInternshipRequirements(internshipID: string): Observable<Requirement[]>;


  public abstract applyToInternship(int: number): Observable<Internship>;

  public abstract updateInternship(internship: Internship): Observable<Internship>;

  public abstract getListAllSkills() : Observable<Skill[]>;

  public abstract addSkill(internship: Internship, skill: Skill): Observable<Skill>;

  public abstract deleteSkill(internship: Internship,id: number): Observable<Skill>;

  public abstract addRequirement(internship: Internship, requirement: Requirement): Observable<Requirement>;

  public abstract deleteRequirement(internship: Internship,id: number): Observable<Requirement>;

}

export class ServerInternshipDetailsService implements AbstractInternshipDetailsService {

  applicantID: number;
  isApplicant: boolean;
  isUsersProfile: boolean = true;
  allSkills: Skill[];

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer x'
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

  public getListAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url + '/skill/all', this.httpOptions).pipe(
      tap(
        data => {
          this.allSkills = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  addSkill(internship: Internship, skill: Skill): Observable<Internship> {
    return this.http.put<Internship>(this.url + '/internship/' + internship.id + '/skill', skill, this.httpOptions).pipe(
      tap(
        data => {
        },
        error => {
        }
      )
    );
  }

  deleteSkill(internship: Internship,id: number): Observable<Internship> {
    return this.http.delete<Internship>(this.url + '/internship/' + internship.id + '/skills/' + id, this.httpOptions).pipe(
      tap(
        data => {
        },
        error => {
        }
      )
    );
  }

  public addRequirement(internship: Internship, requirement: Requirement): Observable<Requirement> {
    console.log(requirement);
    return this.http.put<Requirement>(this.url + '/internship/' + internship.id + '/requirement', requirement, this.httpOptions).pipe(
      tap(
        data => {
        },
        error => {
        }
      )
    );
  }
  public deleteRequirement(internship: Internship, id: number): Observable<Requirement> {
    console.log(id);
    return this.http.delete<Requirement>(this.url + '/internship/' + internship.id + '/requirement/' + id, this.httpOptions).pipe(
      tap(
        data => {
        },
        error => {
        }
      )
    );
  }

}

export class MockInternshipDetailsService implements AbstractInternshipDetailsService {
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
}
