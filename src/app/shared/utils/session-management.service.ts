import {EventEmitter, Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {User} from '../model/user';
import {Company} from '../model/Company';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Role} from '../model/Role';
import {Applicant} from '../model/applicant';

@Injectable()
export class SessionManagementService {

  private getLoggedUserInfoUrl = 'https://enigmatic-sierra-91538.herokuapp.com/api/user';
  private baseUrl = 'https://enigmatic-sierra-91538.herokuapp.com/api';
  private token = null;
  private currentLoggedUser: User = null;
  private specificId: number;
  public isLoginDataLoadingFinished: EventEmitter<boolean> = new EventEmitter();
  private everythingLoaded = false;

  constructor(private http: HttpClient) {

  }

  public setToken(token: string) {
    token = 'Bearer ' + token;
    this.token = token;
    localStorage.setItem('token', token);
    this.getLoggedUser().subscribe((user) => {
      this.currentLoggedUser = user;
      if (this.currentLoggedUser.roles[0].roleString === Role.RoleStringEnum.APPLICANT) {
        this.getLoggedApplicantInfo().subscribe((applicant) => {
          this.specificId = applicant.id;
          this.isLoginDataLoadingFinished.emit(true);
          this.everythingLoaded = true;
        }, (error) => {
          console.log(error);
          this.isLoginDataLoadingFinished.emit(false);
        });
      } else if (this.currentLoggedUser.roles[0].roleString === Role.RoleStringEnum.COMPANY) {
        this.getLoggedCompanyInfo().subscribe((company) => {
          this.specificId = company.id;
          this.isLoginDataLoadingFinished.emit(true);
          this.everythingLoaded = true;
        }, (error) => {
          console.log(error);
          this.isLoginDataLoadingFinished.emit(false);
        });
      } else {
        this.isLoginDataLoadingFinished.emit(false);
      }
    }, (error) => {
      console.log(error);
      this.isLoginDataLoadingFinished.emit(false);
    });
  }

  public isUserLoggedIn(): boolean {
    return this.token !== null && this.currentLoggedUser !== null;
  }

  public getToken() {
    if (this.token == null) {
      this.token = localStorage.getItem('token');
    }
    return this.token;
  }

  public removeToken() {

  }

  public getLoggedUserId(): number {
    return this.currentLoggedUser.id;
  }

  public getLoggedUserRole(): Role.RoleStringEnum {
    return this.currentLoggedUser.roles[0].roleString;
  }

  public isEverythingLoaded(): boolean {
    return this.everythingLoaded;
  }


  private getLoggedUser(): Observable<User> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': this.token
        })
    };
    return this.http.get<User>(this.getLoggedUserInfoUrl, httpOptions);
  }

  private getLoggedCompanyInfo(): Observable<Company> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': this.token
        })
    };
    return this.http.get<Company>(this.baseUrl + '/user/company/' +
      this.getLoggedUserId(), httpOptions);
  }

  private getLoggedApplicantInfo(): Observable<Applicant> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': this.token
        })
    };
    return this.http.get<Company>(this.baseUrl + '/user/applicant/' +
      this.getLoggedUserId(), httpOptions);
  }

  public getSpecificId(): number {
    return this.specificId;
  }
}
