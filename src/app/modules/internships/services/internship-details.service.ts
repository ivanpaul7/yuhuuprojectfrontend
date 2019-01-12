import { Injectable } from '@angular/core';
import { Internship } from 'src/app/shared/model/Internship';

@Injectable()
export abstract class AbstractInternshipDetailsService {
  public abstract getInternship(internshipID: string): Internship;
}

export class ServerInternshipDetailsService implements AbstractInternshipDetailsService {

  public getInternship(internshipID: string): Internship {
    return {
      deadline: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu cursus euismod. In nibh mauris cursus mattis molestie a. ',
      endDate: new Date('2013/10/11'),
      id: 1,
      startDate: new Date('2012/10/11'),
      title: 'multa info',
    };
  }
}

export class MockInternshipDetailsService implements AbstractInternshipDetailsService {
  public getInternship(internshipID: string): Internship {
    return {
      deadline: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu cursus euismod. In nibh mauris cursus mattis molestie a. ',
      endDate: new Date('2013/10/11'),
      id: 1,
      startDate: new Date('2012/10/11'),
      title: 'multa info',
    };
  }
}
