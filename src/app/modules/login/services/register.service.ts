import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export abstract class AbstractRegisterService {

  authToken: String;

  public abstract register(username: String,
                           password: String,
                           email: String,
                           firstName: String,
                           lastNameString,
                           age: number): Observable<boolean>;
}


export class MockRegisterService implements AbstractRegisterService {
  authToken = ' ';

  register(username: String, password: String, email: String, firstName: String, lastNameString, age: number): Observable<boolean> {
    if (username !== '') {
      return of(false);
    } else {
      return of(false);
    }
  }
}

export class ServerRegisterService implements AbstractRegisterService {
  authToken = ' ';

  constructor(private http: HttpClient) {
  }

  register(username: String, password: String, email: String, firstName: String, lastNameString, age: number): Observable<boolean> {
    if (username !== '') {
      return of(true);
    } else {
      return of(false);
    }
  }
}
