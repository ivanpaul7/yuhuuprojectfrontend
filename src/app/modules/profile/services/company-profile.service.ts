import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Company} from '../../../shared/model/Company';
import {Role} from '../../../shared/model/Role';
import {Applicant} from '../../../shared/model/Applicant';
import {tap} from 'rxjs/operators';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export abstract class AbstractCompanyProfileService {
  company: Company;

  public abstract getCompany(id: number): Observable<Company>;

  public abstract updateCompanyBasicInfo(comp: Company): Observable<Company>;

  public abstract updateCompanyContact(comp: Company): Observable<Company>;

  public abstract updateCompanyEmail(comp: Company): Observable<Company>;
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
        'url': null,
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


}

//todo change bearer from logged user
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiY29tcGFueSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1NzI2MzMwODQsImF1dGhvcml0aWVzIjpbIkNPTVBBTlkiXSwianRpIjoiY2FhM2U1ZTYtNjAzZC00OGJiLWI4ZTYtMzc3MzNmZTQyYzM3IiwiY2xpZW50X2lkIjoidGVzdGp3dGNsaWVudGlkIn0.eDrgooHEd42Ueg3QJbaJ3txr1cEFogLvzOLfNHSjf60'    })
};


@Injectable({
  providedIn: 'root'
})
export class ServerCompanyProfileService implements AbstractCompanyProfileService {
  company: Company;
  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api

  constructor(private http: HttpClient) {
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(this.url + '/user/company/' + id, httpOptions).pipe(
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

  updateCompanyBasicInfo(comp: Company): Observable<Company> {
    return undefined;
  }

  updateCompanyContact(comp: Company): Observable<Company> {
    return undefined;
  }

  updateCompanyEmail(comp: Company): Observable<Company> {
    return undefined;
  }

}
