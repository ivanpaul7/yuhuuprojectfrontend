import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Applicant} from '../../../shared/model/Applicant';
import {catchError, tap} from 'rxjs/operators';
import {st} from '@angular/core/src/render3';

export abstract class AbstractStudentProfileService {
  applicant: Applicant;

  public abstract getStudentProfile(id: number): Observable<Applicant> ;

  public abstract updateStudentProfileBasic(studentProfile: Applicant): Observable<Applicant>

  public abstract updateStudentProfile(studentProfile: Applicant): Observable<Applicant>

  public abstract updateStudentProfileContact(applicant: Applicant): Observable<Applicant>
}


@Injectable({
  providedIn: 'root'
})
export class MockStudentProfileService implements AbstractStudentProfileService {
  applicant: Applicant ={
    "id": 16,
    "user": {
      "id": 2,
      "username": "applicant",
      "email": "applicant@yuhuu.com",
      "password": "{bcrypt}$2a$10$ZvUeM7o1sIP9U.neWTVJYObELhV5b2NPjQpmmwn6MKVHffaGNMUf6",
      "active": true,
      "roles": [
        {
          "roleId": 11,
          "roleString": "APPLICANT"
        }
      ]
    },
    "firstName": "Marcel",
    "lastName": "Carlan",
    "birthday": "1997-04-06",
    "description": "I have served as the principal server and operations architect for leading websites in all three of those industry verticals (Retail, Travel, and Financial), and built teams who could take over those tasks and grow them to global scale. I have held a variety of technical roles, including leading Software Development, Consulting, Professional Services, Operations, and Pre-Sales Engineering teams. I have a demonstrated history of guiding my teams through disruptive market changes to deliver value to my employer and customers.",
    "contact": {
      "id": 20,
      "phoneNumber": "0758426882",
      "facebookLink": "https://www.facebook.com/betfair",
      "website": "www.website.com",
      "linkedinLink": "https://www.linkedin.com/in/rad/",
      "address": {
        "id": 21,
        "latitude": 1000,
        "longitude": 1000,
        "country": "Romania",
        "county": "Cluj",
        "sector": "-",
        "postalCode": "505200",
        "town": "Cluj-Napoca",
        "street": "Iuliu Maniu",
        "number": "2",
        "block": "3",
        "entrance": "4",
        "floor": "5",
        "apartment": "6"
      },
      "photo": {
        "id": 22,
        "url": null,
        "public_id": null,
        "path": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Liam_Neeson_Deauville_2012_2.jpg/220px-Liam_Neeson_Deauville_2012_2.jpg"
      },
      "cv": {
        "id": 23,
        "url": null,
        "public_id": null,
        "path": "https://europass.cedefop.europa.eu/sites/default/files/europass_cv_instructions_ro.pdf"
      }
    }
  };
  //todo delete http :)
  constructor(private http: HttpClient) {
  }

  getStudentProfile(id: number): Observable<Applicant> {
    return of(this.applicant);
  }

  updateStudentProfile(studentProfile: Applicant): Observable<Applicant> {
    return this.mockUpdate(studentProfile);
  }

  updateStudentProfileBasic(studentProfile: Applicant): Observable<Applicant> {
    return this.mockUpdate(studentProfile);
  }

  updateStudentProfileContact(studentProfile: Applicant): Observable<Applicant> {
    return this.mockUpdate(studentProfile);
  }

  private mockUpdate(studentProfile: Applicant): Observable<Applicant> {
    this.applicant=studentProfile;
    return of(this.applicant);
  }
}


@Injectable({
  providedIn: 'root'
})
export class ServerStudentProfileService implements AbstractStudentProfileService {
  applicant: Applicant;
  private studentsProfilesUrl = 'api/studentsProfiles';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET student profile by id. Will 404 if id not found */
  getStudentProfile(id: number): Observable<Applicant> {
    const url = `${this.studentsProfilesUrl}/${id}`;
    return this.http.get<Applicant>(url).pipe(
      tap(_ => this.log(`fetched StudentProfile id=${id}`)),
      catchError(this.handleError<Applicant>(`getStudentProfile id=${id}`))
    );
  }

  /** PUT: update the Applicant on the server */
  updateStudentProfile(studentProfile: Applicant): Observable<Applicant> {
    return this.http.put(this.studentsProfilesUrl, studentProfile, httpOptions).pipe(
      tap(_ => this.log(`ssupdated Student's Profile id=${studentProfile.id}`)),
      catchError(this.handleError<any>('updateStudentProfile'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Console log errors */
  private log(message: string) {
    console.log(`StudentProfileService: ${message}`);
  }

  updateStudentProfileBasic(studentProfile: Applicant): Observable<Applicant> {
    return undefined;
  }

  updateStudentProfileContact(studentProfile: Applicant): Observable<Applicant> {
    return undefined;
  }
}


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
