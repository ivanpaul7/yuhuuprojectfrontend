import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import * as $ from 'node_modules/jquery/dist/jquery.js';
import {FormsModule} from '@angular/forms';
import {SessionManagementService} from '../../../shared/utils/session-management.service';
import {Applicant} from '../../../shared/model/applicant';
import {tap} from 'rxjs/operators';

@Injectable()
export abstract class AbstractLoginService {

  public loginProcessFinished: EventEmitter<boolean> = new EventEmitter();

  public abstract login(username: String, password: String);

  public logout() {

  }
}


export class MockLoginService implements AbstractLoginService {

  public loginProcessFinished: EventEmitter<boolean> = new EventEmitter();

  login(username: String, password: String) {
    return new Promise((resolve, reject) => {
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

export class ServerLoginService implements AbstractLoginService {

  public loginProcessFinished: EventEmitter<boolean> = new EventEmitter();

  url = 'https://enigmatic-sierra-91538.herokuapp.com/oauth/token';

  constructor(private http: HttpClient,
              private sessionManagementService: SessionManagementService) {
    sessionManagementService.isLoginDataLoadingFinished.subscribe((booleanResponse) => {
      this.loginProcessFinished.emit(booleanResponse);
    }, (error) => {
      console.log(error);
      this.loginProcessFinished.emit(false);
    });
  }

  login(username: String, password: String) {
    return new Promise((resolve, reject) => {
      const data = new FormData();
      data.append('username', '' + username);
      data.append('password', '' + password);
      data.append('grant_type', 'password');
      const sessionManagementServiceUnnecessaryCopy = this.sessionManagementService;
      const loginProcessFinishedUnnecessaryCopy = this.loginProcessFinished;
      $.ajax({
        url: 'https://cors-anywhere.herokuapp.com/https://enigmatic-sierra-91538.herokuapp.com/oauth/token',
        headers: {
          'Authorization': 'Basic dGVzdGp3dGNsaWVudGlkOlhZN2ttem9OemwxMDA',
        },
        data: data,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function (response: any) {
          sessionManagementServiceUnnecessaryCopy.setToken(response.access_token);
          resolve(true);
        },
        error: function (request, status, error) {
          loginProcessFinishedUnnecessaryCopy.emit(false);
          reject(false);
        }
      });
    });

  }

  logout() {
  }
}
