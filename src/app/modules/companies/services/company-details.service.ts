import {Injectable} from '@angular/core';
import {Company} from '../../../shared/model/Company';
import {Photo} from '../../../shared/model/Photo';
import {Contact} from '../../../shared/model/Contact';

@Injectable()
export abstract class AbstractCompanyDetailsService {
  public abstract getCompany(companyID: string): Company;
}

export class ServerCompanyDetailsService implements AbstractCompanyDetailsService {
  photo1: Photo = {id: 1, url: 'https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg'};

  contact1: Contact = {id: 1, phoneNumber: '124124', photo: this.photo1};

  company: Company =
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
    };

  public getCompany(companyID: string): Company {
    return this.company;
  }
}

export class MockCompanyDetailsService implements AbstractCompanyDetailsService {
  photo1: Photo = {id: 1, url: 'https://image.shutterstock.com/image-photo/valencia-spain-march-05-2017-260nw-593204357.jpg'};

  contact1: Contact = {id: 1, phoneNumber: '124124', photo: this.photo1};

  company: Company =
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
    };

  public getCompany(companyID: string): Company {
    return this.company;
  }
}
