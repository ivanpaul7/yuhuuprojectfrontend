import { Injectable } from '@angular/core';
import { Internship } from 'src/app/shared/model/internships.model';

@Injectable()
export class InternshipDetailsService {

  constructor() { }
  public getInternship(internshipID:string) {
    //console.log("merge service");
  }
}

export class MockInternshipDetailsService {
  public getInternship(internshipID:string) : Internship{
    //return '{"title": "Title Internship", "description": "descriere", "skills": "skills", "attributes":  "attributes", "requirements":"requirements", "tags": ["tag1","tag2"], "type": "full-time", "locuri": 20, "status": "activ", "logo": "https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg", "deadline": 1544313600}'
    return new Internship(
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
