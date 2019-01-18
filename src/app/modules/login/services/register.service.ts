import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Applicant} from '../../../shared/model/Applicant';
import {tap} from 'rxjs/operators';

@Injectable()
export abstract class AbstractRegisterService {

  authToken: String;

  public abstract register(username: String,
                           password: String,
                           email: String,
                           firstName: String,
                           lastName: String): Observable<Applicant>;
}


export class MockRegisterService implements AbstractRegisterService {
  authToken = ' ';

  register(username: String, password: String, email: String, firstName: String, lastNameString: String): Observable<Applicant> {
    // todo
    if (username !== '') {
      return of(null);
    } else {
      return of(null);
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class ServerRegisterService implements AbstractRegisterService {
  authToken = ' ';
  private url = 'https://enigmatic-sierra-91538.herokuapp.com/register/applicant';

  constructor(private http: HttpClient) {
  }

  register(username: String, password: String, email: String, firstName: String, lastName: String): Observable<Applicant> {
    return this.http.post<Applicant>(this.url, {
      'user': {
        'email': email,
        'password': password,
        'username': username
      },
      'applicant': {
        // todo delete
        'birthday': '1950-12-27',
        'firstName': firstName,
        'lastName': lastName
      }
    }).pipe(
      tap(
        () => {
        },
        error => {
          console.log(error);
        }
      )
    );
  }
}
