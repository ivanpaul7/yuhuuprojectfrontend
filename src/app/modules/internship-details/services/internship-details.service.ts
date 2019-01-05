import { Injectable } from '@angular/core';
import { Internship } from 'src/app/shared/model/internships.model';

@Injectable()
export abstract class AbstractInternshipDetailsService {
  public abstract getInternship(internshipID:string): Internship;
}

export class ServerInternshipDetailsService implements AbstractInternshipDetailsService {

  public getInternship(internshipID:string) : Internship {
    return new Internship(
      1,
      'Un internship',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu cursus euismod. In nibh mauris cursus mattis molestie a. ',
      '12/12/2022',
      'C++',
      'https://ardgowanhospice.org.uk/wp-content/uploads/2018/09/1920x1080-brands-amazon-logo.jpg',
      '2012/10/11',
      '2013/10/11'
  )
  }
}

export class MockInternshipDetailsService implements AbstractInternshipDetailsService {
  public getInternship(internshipID:string) : Internship{
    return new Internship(
      1,
      'Un internship',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu cursus euismod. In nibh mauris cursus mattis molestie a. ',
      '12/12/2022',
      'JAVA',
      'https://ardgowanhospice.org.uk/wp-content/uploads/2018/09/1920x1080-brands-amazon-logo.jpg',
      '2012/10/11',
      '2013/10/11'
  )
  }
}
