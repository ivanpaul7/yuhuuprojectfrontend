import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../model/user';
import {Company} from '../model/Company';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Role} from '../model/Role';
import {Applicant} from '../model/applicant';
import {applicantNavBarItems, companyNavBarItems} from '../../app.module';

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
    this.getLoggedUser().subscribe((user) => {
      this.currentLoggedUser = user;
      if (this.currentLoggedUser.roles[0].roleString === Role.RoleStringEnum.APPLICANT) {
        this.getLoggedApplicantInfo().subscribe((applicant) => {
          this.specificId = applicant.id;
          this.addMyProfileButtonToNavBar();
          this.everythingLoaded = true;
          this.persistInLocalStorage();
          this.isLoginDataLoadingFinished.emit(true);
        }, (error) => {
          console.log(error);
          this.isLoginDataLoadingFinished.emit(false);
        });
      } else if (this.currentLoggedUser.roles[0].roleString === Role.RoleStringEnum.COMPANY) {
        this.getLoggedCompanyInfo().subscribe((company) => {
          this.specificId = company.id;
          this.addMyProfileButtonToNavBar();
          this.everythingLoaded = true;
          this.persistInLocalStorage();
          this.isLoginDataLoadingFinished.emit(true);
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

  private persistInLocalStorage() {
    localStorage.setItem('token', this.token);
    localStorage.setItem('currentLoggedUser', JSON.stringify(this.currentLoggedUser));
    localStorage.setItem('everythingLoaded', JSON.stringify(this.everythingLoaded));
    localStorage.setItem('specificId', JSON.stringify(this.specificId));
  }

  public retrieveFromLocalStorage() {
    this.token = localStorage.getItem('token');
    this.currentLoggedUser = JSON.parse(localStorage.getItem('currentLoggedUser'));
    this.everythingLoaded = JSON.parse(localStorage.getItem('everythingLoaded'));
    this.specificId = JSON.parse(localStorage.getItem('specificId'));
    if (this.currentLoggedUser != null) {
      this.addMyProfileButtonToNavBar();
      this.isLoginDataLoadingFinished.emit(true);
    } else {
      this.isLoginDataLoadingFinished.emit(false);
    }
  }

  private addMyProfileButtonToNavBar() {
    if (this.currentLoggedUser.roles[0].roleString === Role.RoleStringEnum.APPLICANT) {
      if (applicantNavBarItems.length === 4) {
        applicantNavBarItems.splice(applicantNavBarItems.length - 1, 1);
      }
      applicantNavBarItems.push({title: 'My profile', path: 'profile/student/' + this.specificId});

    } else if (this.currentLoggedUser.roles[0].roleString === Role.RoleStringEnum.COMPANY) {
      if (companyNavBarItems.length === 2) {
        companyNavBarItems.splice(applicantNavBarItems.length - 1, 1);
      }
      companyNavBarItems.push({title: 'My profile', path: 'profile/company/' + this.specificId});
    }
  }

  public clearLocalStorage() {
    localStorage.removeItem('token');
    localStorage.removeItem('currentLoggedUser');
    localStorage.removeItem('everythingLoaded');
    localStorage.removeItem('specificId');
    this.token = null;
    this.currentLoggedUser = null;
    this.specificId = null;
    this.everythingLoaded = false;
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
