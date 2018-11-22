import { Injectable } from '@angular/core';

@Injectable()
export class InternshipDetailsService {

  constructor() { }
  public getInternship(internshipID:string) {
    console.log("merge service");
  }
}
