import { Injectable } from '@angular/core';

@Injectable()
export class InternshipDetailsService {

  constructor() { }
  public getInternship(internshipID:string) {
    //console.log("merge service");
  }
}

export class MockInternshipDetailsService {
  public getInternship(internshipID:string) : string{
    return '{"title": "Title Internship", "description": "descriere", "skills": "skills", "attributes":  "attributes", "requirements":"requirements", "tags": ["tag1","tag2"], "type": "full-time", "locuri": 20, "status": "activ", "logo": "https://ontarioarc.org/wp-content/uploads/2015/05/pepsi-logo-vector.jpg", "deadline": 1544313600}'
  }
}
