import {Injectable} from '@angular/core';
import {Company, Contact, Photo} from '../../../shared/model/company';


@Injectable()
export abstract class AbstractCompaniesService {

  public abstract getCompanies(): Company[];

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
  photo1: Photo = new Photo(1, 'https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg');
  photo2: Photo = new Photo(2, 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png');

  contact1: Contact = new Contact(1, '124124', this.photo1);
  contact2: Contact = new Contact(2, '4234235', this.photo2);

  private companies: Company[] = [
    new Company(
      1,
      'UBB',
      'Facultate mai de cacat',
      1,
      1,
      this.contact1
    ),
    new Company(
      2,
      'UBB',
      'Facultate de cacat 2',
      5,
      10,
      this.contact2
    )
  ];

  private companiesName: string[] = ['facebook', 'google', 'amazon'];

  constructor() {
  }

  public getCompanies(): Company[] {
    return this.companies.slice();
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

export class ServerCompaniesService implements AbstractCompaniesService {

  public getCompanies(): Company[] {
    return null;
  }

  public getNameFilters(): string[] {
    return null;
  }

  public getCompanyName(): string[] {
    return null;
  }

  setNameFilters(filters: string[]) {
  }
}

