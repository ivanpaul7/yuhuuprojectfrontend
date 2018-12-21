import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export abstract class AbstractLoginService {

  authToken: String;

  public abstract login(username: String, password: String): Observable<boolean>;

  public logout() {

  }
}


export class MockLoginService implements AbstractLoginService {
  authToken = ' ';

  login(username: String, password: String): Observable<boolean> {
    if (username === 'test' && password === 'test') {
      return of(true);
    } else {
      return of(false);
    }
  }

  logout() {
  }

}

export class ServerLoginService implements AbstractLoginService {
  authToken = ' ';
  url = 'https://enigmatic-sierra-91538.herokuapp.com/oauth/token';

  constructor(private http: HttpClient) {
  }

  login(username: String, password: String): Observable<boolean> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic dGVzdGp3dGNsaWVudGlkOlhZN2ttem9OemwxMDA'
      })
    };
    const body = new FormData();
    body.append('grant_type', 'password');
    body.append('username', '' + username);
    body.append('password', '' + password);
    this.http.post<any>(this.url, body, httpOptions).subscribe(
      data => {
        console.log('POST Request is successful ', data);
      },
      error => {
        console.log('Error', error);
      }
    );
    // TODO :)
    // .pipe(map(user => {
    //   // login successful if there's a jwt token in the response
    //   if (user && user.access_token) {
    //     // store user details and jwt token in local storage to keep user logged in between page refreshes
    //     localStorage.setItem('currentUser', JSON.stringify(user));
    //   }
    //
    //   return user;
    // }));
    return of(true);
  }

  logout() {
  }


}
