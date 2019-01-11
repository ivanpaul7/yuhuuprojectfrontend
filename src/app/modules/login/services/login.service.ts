import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import * as $ from "node_modules/jquery/dist/jquery.js";
import { FormsModule } from '@angular/forms';

@Injectable()
export abstract class AbstractLoginService {

  authToken: String;

  public abstract login(username: String, password: String);

  public logout() {

  }
}


export class MockLoginService implements AbstractLoginService {
  authToken = ' ';

  login(username: String, password: String) {
    return new Promise((resolve, reject)=>{
      if (username === 'test' && password === 'test') {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }

  logout() {
  }

}

export class ServerLoginService implements AbstractLoginService, OnInit {
  authToken = ' ';
  url = 'https://enigmatic-sierra-91538.herokuapp.com/oauth/token';

  constructor(private http: HttpClient) {
  }

  login(username: String, password: String){
    return new Promise((resolve, reject)=>{
      var data = new FormData();
      data.append("username",""+username);
      data.append("password",""+password);
      data.append("grant_type","password");

      $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://enigmatic-sierra-91538.herokuapp.com/oauth/token',
        headers: {
          "Authorization":"Basic dGVzdGp3dGNsaWVudGlkOlhZN2ttem9OemwxMDA",
        },
        data: data,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function(data){
          console.log(data.access_token);
          resolve(true);
        },
        error: function (request, status, error) {
          reject(false);
        }
      });

    });

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
    //return of(true);
  }

  logout() {
  }
  ngOnInit(): void {
    $(document).ready(function(){


      $( "#formTest" ).submit(function( event ) {
        console.log("1111111111111");
        event.preventDefault();

        var data = new FormData(); // <-- 'this' is your form element
        data.append("username","applicant");
        data.append("password","password");
        data.append("grant_type","password");

        $.ajax({
          // url: 'http://localhost:8080/api/applicant/16/cv',
          url: 'https://cors-anywhere.herokuapp.com/https://enigmatic-sierra-91538.herokuapp.com/oauth/token',
          // url:'https://cors-anywhere.herokuapp.com/http://localhost:8080/oauth/token',
          // url: 'http://localhost:8080',
          headers: {
            // "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTU3Njk2ODI5MywiYXV0aG9yaXRpZXMiOlsiQVBQTElDQU5UIl0sImp0aSI6IjM1MTdkZDFjLWQwZTEtNDMwYy04MmI4LTQxYjlmMzA0YzEyYSIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGllbnRpZCJ9.UTXR57P-XQQjgDdHeIjAajADLWCPkov4JjwjO5JkwhE",
            "Authorization":"Basic dGVzdGp3dGNsaWVudGlkOlhZN2ttem9OemwxMDA",
          },
          data: data,
          contentType: false,
          processData: false,
          type: 'POST',
          success: function(data){
            console.log("SUCCES")
            console.log(data)
          },
          error: function (request, status, error) {
            console.log("ERROR")
          }

        });
      });

    })
  }
}
