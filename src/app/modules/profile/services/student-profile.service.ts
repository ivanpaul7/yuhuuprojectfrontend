import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {StudentProfile} from './StudentProfile';
import {catchError, tap} from 'rxjs/operators';

export abstract class AbstractStudentProfileService {
  public abstract getStudentProfile(id: number): Observable<StudentProfile> ;

  public abstract updateStudentProfile(studentProfile: StudentProfile): Observable<any>
}

export class MockStudentProfileService implements AbstractStudentProfileService {
  getStudentProfile(id: number): Observable<StudentProfile> {
    return of({
      id: 1,
      firstName: 'Rares',
      lastName: 'Beltechi',
      faculty: 'UBB Matematica si Informatica',
      phone: '0740111222',
      email: 'rares@mail.com',
      linkedinPage: 'https://www.linkedin.com/in/beltechi-rares-9a6109103/',
      facebookPage: 'https://www.facebook.com/rareess',
      description: 'Experienced Director of Marketing Operations with a ' +
        'demonstrated history of working in education software, telecom, ' +
        'semiconductor, and real estate industries. Skilled in Marketing ' +
        'Operations and Automation, Customer Relationship Management (CRM), ' +
        'Business Intelligence and Analytics'
    });
  }

  updateStudentProfile(studentProfile: StudentProfile): Observable<any> {
    return of(true);
  }

}


@Injectable({
  providedIn: 'root'
})
export class ServerStudentProfileService implements AbstractStudentProfileService {
  private studentsProfilesUrl = 'api/studentsProfiles';  // URL to web api
  constructor(private http: HttpClient) {
  }

  /** GET student profile by id. Will 404 if id not found */
  getStudentProfile(id: number): Observable<StudentProfile> {
    const url = `${this.studentsProfilesUrl}/${id}`;
    return this.http.get<StudentProfile>(url).pipe(
      tap(_ => this.log(`fetched StudentProfile id=${id}`)),
      catchError(this.handleError<StudentProfile>(`getStudentProfile id=${id}`))
    );
  }

  /** PUT: update the StudentProfile on the server */
  updateStudentProfile(studentProfile: StudentProfile): Observable<any> {
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
}


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
