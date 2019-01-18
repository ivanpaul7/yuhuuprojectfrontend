import {Injectable} from '@angular/core';
import {Company} from '../../../shared/model/company';
import {Photo} from '../../../shared/model/Photo';
import {Contact} from '../../../shared/model/Contact';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {tap} from 'rxjs/operators';


@Injectable()
export abstract class AbstractCompaniesService {

  public abstract getCompanies(): Observable<Company[]>;

  public abstract getNameFilters(): string[];

  public abstract getCompanyName(): string[];

  public abstract setNameFilters(filters: string[]): void;
}

export class MockCompaniesService implements AbstractCompaniesService {
  nameFilters: string[] = [];
  companyLogo: string[] = [
    'https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg',
    'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png',
    'https://ardgowanhospice.org.uk/wp-content/uploads/2018/09/1920x1080-brands-amazon-logo.jpg'
  ];
  photo1: Photo = {id: 1, url: 'https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg'};
  photo2: Photo = {id: 2, url: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png'};

  contact1: Contact = {id: 1, phoneNumber: '124124', photo: this.photo1};
  contact2: Contact = {id: 2, phoneNumber: '4234235', photo: this.photo2};

  private companies: Company[] = [
    {
      id: 1,
      name: 'La Fortech',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
        ' labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt' +
        ' lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu' +
        ' cursus euismod. In nibh mauris cursus mattis molestie a.',
      dimension: 1,
      views: 1,
      contact: this.contact1
    },
    {
      id: 2,
      name: 'La Arobs',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut' +
        ' labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt' +
        ' lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu' +
        ' cursus euismod. In nibh mauris cursus mattis molestie a.',
      dimension: 5,
      views: 10,
      contact: this.contact2
    }
  ];

  private companiesName: string[] = ['facebook', 'google', 'amazon', 'La Fortech', 'La Arobs'];

  constructor() {
  }

  public getCompanies(): Observable<Company[]> {
    return of(this.companies.slice());
  }

  getCompanyLogo() {
    return this.companyLogo.slice();
  }

  getCompanyName() {
    return this.companiesName.slice();
  }

  setNameFilters(filters: string[]) {
    this.nameFilters = filters;
  }

  public getNameFilters(): string[] {
    return this.nameFilters;
  }
}

// todo change bearer from logged user
const httpOptions = {
  headers: new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJlc291' +
        'cmNlaWQiXSwidXNlcl9uYW1lIjoiY29tcGFueSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJdLCJleHAiOjE1Nzcz' +
        'MDA1NTksImF1dGhvcml0aWVzIjpbIkNPTVBBTlkiXSwianRpIjoiZWYwNTMyMTItNTBjMy00NjBlLTljMGMtZjQ1M' +
        'jhhMzIyODljIiwiY2xpZW50X2lkIjoidGVzdGp3dGNsaWVudGlkIn0.AKPOfkqYQ5bvDkbVGBMYXDJzvJIaOukYWLhsnZckmTo'
    })
};

@Injectable({
  providedIn: 'root'
})
export class ServerCompaniesService implements AbstractCompaniesService {
  companies: Company[];

  private companiesName: string[] = [];
  nameFilters: string[] = [];

  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api

  constructor(private http: HttpClient) {
  }

  public getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.url + '/company/all', httpOptions).pipe(
      tap(
        data => {
          this.companies = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  getCompanyName() {
    for (let i = 0; i < this.companies.length; i++) {
      this.companiesName.push(this.companies[i].name);
    }
    return this.companiesName.slice();
  }

  setNameFilters(filters: string[]) {
    this.nameFilters = filters;
  }

  public getNameFilters(): string[] {
    return this.nameFilters;
  }
}

