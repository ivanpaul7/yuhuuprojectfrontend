import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Company} from '../../../shared/model/Company';
import {Role} from '../../../shared/model/Role';
import {Applicant} from '../../../shared/model/Applicant';
import {tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import * as $ from 'node_modules/jquery/dist/jquery.js';
import {SessionManagementService} from '../../../shared/utils/session-management.service';

@Injectable()
export abstract class AbstractCompanyProfileService {
  company: Company;

  public abstract getCompany(id: number): Observable<Company>;

  public abstract updateCompanyBasicInfo(comp: Company): Observable<Company>;

  public abstract updateCompanyContact(comp: Company): Observable<Company>;

  public abstract updateCompanyEmail(comp: Company): Observable<Company>;

  public abstract uploadPhoto(uploadData: FormData);

  public abstract initialize();

  public abstract isHisProfile(): boolean;
}

export class MockCompanyProfileService implements AbstractCompanyProfileService {
  company: Company = {
    'id': 6,
    'user': {
      'id': 4,
      'username': 'company',
      'email': 'company@yuhuu.com',
      'password': '{bcrypt}$2a$10$8tQhMgsRD0G13C63b0VEjOm0WnG7foWivehxJkldp5T.5EqsYVbhe',
      'active': true,
      'roles': [
        {
          'roleId': 21,
          'roleString': Role.RoleStringEnum.COMPANY
        }
      ]
    },
    'name': 'Betfair',
    'views': 15,
    'contact': {
      'id': 8,
      'phoneNumber': '0758426882',
      'facebookLink': 'https://www.facebook.com/betfair',
      'website': 'https://www.website.com',
      'linkedinLink': 'https://www.linkedin.com/company/betfair/',
      'address': {
        'id': 10,
        'latitude': 46.776431,
        'longitude': 23.603873,
        'country': 'Romania',
        'county': 'Cluj',
        'sector': '',
        'postalCode': '505200',
        'town': 'Cluj-Napoca',
        'street': 'Bld. 1 Decembrie',
        'number': '12',
        'block': null,
        'entrance': null,
        'floor': null,
        'apartment': null
      },
      'photo': {
        'id': 9,
        'url': 'https://aussiebet.com/wp-content/uploads/2018/01/betfair.png',
        'publicId': null,
        'path': 'https://aussiebet.com/wp-content/uploads/2018/01/betfair.png'
      },
      'cv': null
    },
    'dimension': 10032,
    'description': 'Betfair is an online gambling company which operates the world\'s largest online betting exchange. It also offers a Sportsbook (fixed odds betting), online casino, online poker and online bingo. The company\'s headquarters are located in Hammersmith in West London, United Kingdom and Clonskeagh, Dublin.'
  };

  getCompany(id: number): Observable<Company> {
    return of(this.company);
  }

  updateCompanyBasicInfo(comp: Company): Observable<Company> {
    this.company = comp;
    return of(this.company);
  }

  updateCompanyContact(comp: Company): Observable<Company> {
    this.company = comp;
    return of(this.company);
  }

  updateCompanyEmail(comp: Company): Observable<Company> {
    this.company = comp;
    return of(this.company);
  }

  uploadPhoto(uploadData: FormData) {
  }

  initialize() {
  }

  isHisProfile(): boolean {
    return false;
  }


}


@Injectable({
  providedIn: 'root'
})
export class ServerCompanyProfileService implements AbstractCompanyProfileService {
  company: Company;
  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api
  companyID: number;
  isCompany: boolean;
  isUsersProfile: boolean = true;
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer x'
      })
  };

  constructor(private http: HttpClient, private sessionManager: SessionManagementService) {
  }

  initialize() {
    if (this.sessionManager.isUserLoggedIn()) {
      this.httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization': '' + this.sessionManager.getToken()
          })
      };
      this.companyID = this.sessionManager.getLoggedUserId();
      this.isCompany = this.sessionManager.getLoggedUserRole() == Role.RoleStringEnum.COMPANY;
    } else {
      //todo redirect to login :)
    }
  }


  getCompany(id: number): Observable<Company> {
    if ((!this.isCompany) || id === this.companyID) {
      this.isUsersProfile = false;
    }
    return this.http.get<Company>(this.url + '/company/details/' + id, this.httpOptions).pipe(
      tap(
        data => {
          this.company = data;
          //todo delete this after backend delivers the object properly :)
          this.company.contact.cv = {};
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  updateCompanyBasicInfo(comp: Company): Observable<Company> {
    return this.http.put<Applicant>(this.url + '/company/' + this.company.id + '/profile',
      comp,
      this.httpOptions
    ).pipe(
      tap(
        data => {
          this.company = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  updateCompanyContact(comp: Company): Observable<Company> {
    return this.http.put<Applicant>(
      this.url + '/company/' + this.company.id + '/contact',
      comp,
      this.httpOptions
    ).pipe(
      tap(
        data => {
          this.company = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  updateCompanyEmail(comp: Company): Observable<Company> {
    if (this.company.user.email == comp.user.email)
      return of(this.company);

    return this.http.put<Applicant>(
      this.url + '/company/' + comp.id + '/email',
      {'email': comp.user.email},
      this.httpOptions
    ).pipe(
      tap(
        data => {
          this.company.user = data;
        },
        error => {
          console.log(error);
        }
      )
    );
    ;
  }

  uploadPhoto(uploadData: FormData) {
    return new Promise((resolve, reject) => {
      const url = 'https://enigmatic-sierra-91538.herokuapp.com/api/company/' + this.company.id + '/photo';
      $.ajax({
        url: url,
        headers: {
          'Authorization': this.httpOptions.headers.get('Authorization')
        },
        data: uploadData,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function (data) {
          resolve(data);
        },
        error: function (request, status, error) {
          reject(false);
        }
      });
    });
  };

  isHisProfile(): boolean {
    return this.isUsersProfile;
  }
}
