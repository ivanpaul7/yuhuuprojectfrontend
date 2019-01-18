import {Injectable} from '@angular/core';
import {Internship} from 'src/app/shared/model/InternshipEnums';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Photo} from 'src/app/shared/model/Photo';
import {Tag} from 'src/app/shared/model/Tag';
import {Skill} from 'src/app/shared/model/Skill';


@Injectable()
export abstract class AbstractInternshipDetailsService {
  public abstract getInternship(internshipID: string): Observable<Internship>;

  public abstract getInternshipLogo(internshipID: string): Observable<Photo>;

  public abstract getInternshipTags(internshipID: string): Observable<Tag[]>;

  public abstract getInternshipSkills(internshipID: string): Observable<Skill[]>;
}

export class ServerInternshipDetailsService implements AbstractInternshipDetailsService {
  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api

  constructor(private http: HttpClient) {
  }

  public getInternship(internshipID: string): Observable<Internship> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291cmN' +
            'laWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTU3MjYzN' +
            'DY2MSwiYXV0aG9yaXRpZXMiOlsiQVBQTElDQU5UIl0sImp0aSI6IjU1MTgwZThkLWE4NDktNGQ4MS05MjgyLWZkZjA0' +
            'MGNjNzMyMSIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGllbnRpZCJ9.zsrWgXhBTaEwLomy2KDX7xy-EFDAqx5GfXNMdaAdgJw'
        })
    };

    return this.http.get<Internship>(this.url + '/internship/details/' + internshipID, httpOptions).pipe(
      tap(() => console.log(`fetched Internship id#${internshipID}`)),
      catchError(this.handleError<Internship>(`getInternship failed ${internshipID}`)));
  }

  public getInternshipLogo(internshipID: string): Observable<Photo> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291' +
            'cmNlaWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTU3' +
            'MjYzNDY2MSwiYXV0aG9yaXRpZXMiOlsiQVBQTElDQU5UIl0sImp0aSI6IjU1MTgwZThkLWE4NDktNGQ4MS05Mjgy' +
            'LWZkZjA0MGNjNzMyMSIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGllbnRpZCJ9.zsrWgXhBTaEwLomy2KDX7xy-EFD' +
            'Aqx5GfXNMdaAdgJw'
        })
    };
    return this.http.get<Photo>(this.url + '/internship/' + internshipID + '/logo', httpOptions).pipe(
      tap(() => console.log(`fetched InternshipLogo id#${internshipID}`)),
      catchError(this.handleError<Photo>(`getInternshipLogo failed ${internshipID}`)));
  }

  public getInternshipTags(internshipID: string): Observable<Tag[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291c' +
            'mNlaWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTU3' +
            'MjYzNDY2MSwiYXV0aG9yaXRpZXMiOlsiQVBQTElDQU5UIl0sImp0aSI6IjU1MTgwZThkLWE4NDktNGQ4MS05Mjgy' +
            'LWZkZjA0MGNjNzMyMSIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGllbnRpZCJ9.zsrWgXhBTaEwLomy2KDX7xy-EFD' +
            'Aqx5GfXNMdaAdgJw'
        })
    };
    return this.http.get<Tag[]>(this.url + '/internship/' + internshipID + '/tags', httpOptions).pipe(
      tap(() => console.log(`fetched InternshipLogo id#${internshipID}`)),
      catchError(this.handleError<Tag[]>(`getInternshipLogo failed ${internshipID}`)));
  }

  public getInternshipSkills(internshipID: string): Observable<Skill[]> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291cmNl' +
            'aWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTU3MjYzNDY' +
            '2MSwiYXV0aG9yaXRpZXMiOlsiQVBQTElDQU5UIl0sImp0aSI6IjU1MTgwZThkLWE4NDktNGQ4MS05MjgyLWZkZjA0MG' +
            'NjNzMyMSIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGllbnRpZCJ9.zsrWgXhBTaEwLomy2KDX7xy-EFDAqx5GfXNMdaAdgJw'
        })
    };
    return this.http.get<Skill[]>(this.url + '/internship/' + internshipID + '/skills', httpOptions).pipe(
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
}

export class MockInternshipDetailsService implements AbstractInternshipDetailsService {

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
}
