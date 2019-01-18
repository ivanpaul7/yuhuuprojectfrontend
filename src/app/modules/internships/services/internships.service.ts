import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import * as moment from 'moment';
import {Observable, of, ReplaySubject, Subject} from 'rxjs';
import {Applicant, Company, Education, Internship} from 'src/app/shared/model/models';
import {Skill} from 'src/app/shared/model/Skill';
import {Tag} from 'src/app/shared/model/Tag';
import {InternshipDTO} from '../../../shared/model/InternshipDTO';
import {tap} from 'rxjs/operators';
import {SessionManagementService} from '../../../shared/utils/session-management.service';

export abstract class AbstractInternshipsService {
  companyFilters: Company[] = [];
  skillFilters: string[] = [];
  companySubject = new Subject<Company[]>();
  skillSubject = new Subject<string[]>();

  public abstract initialize();

  public abstract getInternships();

  public abstract getAllInternshipDTOs(): Observable<InternshipDTO[]>;

  public abstract getSkills(): Observable<string[]>;

  public abstract getCompanies(): Observable<Company[]>;

  public abstract getInternshipSkills(idInternship: number);

  public abstract getInternshipsForCompany(idCompany: number);

  public abstract getInternshipLogo(idInternship: number);

  public abstract getInternshipTags(idInternship: number);

  public abstract getInternshipCompany(idInternship: number);

  public abstract setCompanyFilters(filters: Company[]);

  public abstract setSkillFilters(filters: string[]);
}

@Injectable()
export class MockInternshipsService implements AbstractInternshipsService {
  companyFilters: Company[] = [];
  skillFilters: string[] = [];
  companySubject = new Subject<Company[]>();
  skillSubject = new Subject<string[]>();
  private internships: Internship[] = [
    {
      deadline: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
        'Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt ' +
        'lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque ' +
        'egestas diam in arcu cursus euismod. In nibh mauris cursus mattis molestie a. ',
      endDate: new Date('2013/10/11'),
      id: 1,
      startDate: new Date('2012/10/11'),
      title: 'multa info',
    },
    {
      deadline: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer ' +
        'eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. ' +
        'Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu cursus euismod. ' +
        'In nibh mauris cursus mattis molestie a. ',
      endDate: moment('2013/10/11').toDate(),
      id: 2,
      startDate: new Date('2012/10/11'),
      title: 'prezentare dupa prezentare',
    },
    {
      deadline: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
        'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas ' +
        'nteger eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat' +
        ' vivamus. Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu ' +
        'cursus euismod. In nibh mauris cursus mattis molestie a. ',
      endDate: new Date('2013/10/11'),
      id: 3,
      startDate: new Date('2012/10/11'),
      title: 'Titlu',
    },
    {
      deadline: new Date(),
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ' +
        'tempor incididunt ut labore et dolore magna aliqua. Egestas integer eget aliquet nibh. ' +
        'Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. Imperdiet sed euismod nisi ' +
        'porta. Congue quisque egestas diam in arcu cursus euismod. In nibh mauris cursus mattis' +
        ' molestie a. ',
      endDate: new Date('2013/10/11'),
      id: 4,
      startDate: new Date('2012/10/11'),
      title: 'Titlu2',
    },
  ];

  private skills: string[] = [
    // {
    //   id: 1,
    //   name: 'HTML'
    // },
    // {
    //   id: 2,
    //   name: 'CSS'
    // },
    // {
    //   id: 3,
    //   name: 'Java'
    // },
    // {
    //   id: 4,
    //   name: 'C++'
    // }
    'HTML',  'CSS' , 'Java', 'C++'

  ];

  private companies: Company[] = [
    {
      id: 1,
      name: 'facebook'
    },
    {
      id: 2,
      name: 'google'
    },
    {
      id: 3,
      name: 'amazon'
    }
  ];

  constructor() {
  }

  getInternships() {
    return of(this.internships);
  }

  getSkills() {
    return of(this.skills);
  }

  getCompanies() {
    return of(this.companies);
  }

  getInternshipSkills(idInternship: number) {
    if (idInternship === 1) {
      return of([
        {
          id: 1,
          name: 'HTML'
        },
        {
          id: 2,
          name: 'CSS'
        }]);
    }
    if (idInternship === 2) {
      return of([
        {
          id: 2,
          name: 'CSS'
        },
        {
          id: 3,
          name: 'Java'
        }]);
    }
    if (idInternship === 3) {
      return of([
        {
          id: 4,
          name: 'C++'
        },
        {
          id: 3,
          name: 'Java'
        }]);
    }
    if (idInternship === 4) {
      return of([
        {
          id: 4,
          name: 'C++'
        },
        {
          id: 1,
          name: 'HTML'
        }]);
    }
  }

  getInternshipsForCompany(idCompany: number) {
    if (idCompany === 1) {
      return of([
        {
          deadline: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt ' +
            'lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque ' +
            'egestas diam in arcu cursus euismod. In nibh mauris cursus mattis molestie a. ',
          endDate: new Date('2013/10/11'),
          id: 1,
          startDate: new Date('2012/10/11'),
          title: 'multa info',
        }]);
    }
    if (idCompany === 2) {
      return of([
        {
          deadline: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt ' +
            'lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue quisque ' +
            'egestas diam in arcu cursus euismod. In nibh mauris cursus mattis molestie a. ',
          endDate: new Date('2013/10/11'),
          id: 2,
          startDate: new Date('2012/10/11'),
          title: 'prezentare dupa prezentare',
        }]);
    }
    if (idCompany === 3) {
      return of([
        {
          deadline: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, ' +
            'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ' +
            'Egestas integer eget aliquet nibh. Ullamcorper dignissim cras tincidunt' +
            ' lobortis feugiat vivamus. Imperdiet sed euismod nisi porta. Congue ' +
            'quisque egestas diam in arcu cursus euismod. In nibh mauris cursus mattis molestie a. ',
          endDate: new Date('2013/10/11'),
          id: 3,
          startDate: new Date('2012/10/11'),
          title: 'Titlu',
        },
        {
          deadline: new Date(),
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
            'eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas integer' +
            ' eget aliquet nibh. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus. ' +
            'Imperdiet sed euismod nisi porta. Congue quisque egestas diam in arcu cursus' +
            ' euismod. In nibh mauris cursus mattis molestie a. ',
          endDate: new Date('2013/10/11'),
          id: 4,
          startDate: new Date('2012/10/11'),
          title: 'Titlu2',
        },
      ]);
    }
  }

  getInternshipLogo(idInternship: number) {
    if (idInternship === 1) {
      return of({
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png'
      });
    }
    if (idInternship === 2) {
      return of({
        url: 'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png'
      });
    }
    if (idInternship === 3) {
      return of({
        url: 'https://www.jobisjob.com.mx/blog/wp-content/uploads/2015/11/amazon-logo.png'
      });
    }
    if (idInternship === 4) {
      return of({
        url: 'https://www.jobisjob.com.mx/blog/wp-content/uploads/2015/11/amazon-logo.png'
      });
    }
  }

  getInternshipTags(idInternship: number) {
    if (idInternship === 1) {
      return of([
        {
          id: 1,
          name: 'tagInternship1'
        }]);
    }
    if (idInternship === 2) {
      return of([
        {
          id: 2,
          name: 'tagInternship2'
        }]);
    }
    if (idInternship === 3) {
      return of([
        {
          id: 3,
          name: 'tagInternship3'
        }]);
    }
    if (idInternship === 4) {
      return of([
        {
          id: 4,
          name: 'tagInternship4'
        },
        {
          id: 2,
          name: 'tagInternship2'
        }]);
    }
  }

  getInternshipCompany(idInternship: number) {
    if (idInternship === 1) {
      return of(
        {
          id: 1,
          name: 'Facebook'
        }
      );
    }
    if (idInternship === 2) {
      return of(
        {
          id: 2,
          name: 'Google'
        }
      );
    }
    if (idInternship === 3) {
      return of(
        {
          id: 3,
          name: 'Amazon'
        }
      );
    }
    if (idInternship === 4) {
      return of(
        {
          id: 3,
          name: 'Amazon'
        }
      );
    }
  }

  setCompanyFilters(filters: Company[]) {
    this.companyFilters = filters;
    this.companySubject.next(this.companyFilters);

  }

  setSkillFilters(filters: string[]) {
    this.skillFilters = filters;
    this.skillSubject.next(this.skillFilters);
  }

  initialize() {
  }

  getAllInternshipDTOs(): Observable<InternshipDTO[]> {
    return undefined;
  }

  getAllInternshipDTOsLocal(): Observable<InternshipDTO[]> {
    return undefined;
  }
}

@Injectable()
export class ServerInternshipsService implements AbstractInternshipsService {
  companyFilters: Company[] = [];
  skillFilters: string[] = [];
  internshipSubject: ReplaySubject<Internship[]>;
  internshipDTOSubject: ReplaySubject<InternshipDTO[]>;
  companySubject = new Subject<Company[]>();
  companyList = new Subject<Company[]>();
  skillList = new Subject<string[]>();
  skillSubject = new Subject<string[]>();
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhd' +
        'WQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwi' +
        'c2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTU3NjY5OTAzOCwiYXV0aG9yaXRp' +
        'ZXMiOlsiQVBQTElDQU5UIl0sImp0aSI6ImJjMjEyM2Y2LWVmMTQtNDg0Zi1hZjdlLTli' +
        'OGVjMzg1ODg2MSIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGllbnRpZCJ9.ekCWKdN7VuQ' +
        'bN9rOexqF07P0B1u2KsiroEOQdsT51Nk'
    })
  };

  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';

  constructor(private httpClient: HttpClient, private sessionManager: SessionManagementService) {
  }

  initialize() {
    //todo
  }


  getAllInternshipDTOs(): Observable<InternshipDTO[]> {
    // return this.httpClient.get<InternshipDTO[]>(this.url + '/internship/allinternships', this.httpOptions).pipe(
    //   tap(
    //     data => {
    //       this.companyList.next(data.map((internshipDTO)=>internshipDTO.company));
    //     },
    //     error => {
    //       console.log(error);
    //     }
    //   )
    // );

    if (this.internshipDTOSubject) {
      return this.internshipDTOSubject.asObservable();
    } else {
      this.internshipDTOSubject = new ReplaySubject(1);
      return this.httpClient.get<InternshipDTO[]>(this.url + '/internship/allinternships', this.httpOptions).pipe(
        tap(
          data => {
            this.internshipDTOSubject.next(data);
            let skills: Skill[] = [];
            data.forEach((internshipDTO) => {
              skills = skills.concat(internshipDTO.skills);
            });
            let mySet = new Set(skills.map((skill) => skill.name));
            let array = Array.from(mySet);
            this.skillList.next(array);
            this.companyList.next(data.map((internshipDTO) => internshipDTO.company));
          },
          error => {
            console.log(error);
          }
        )
      );
      // return this.internshipDTOSubject.asObservable();
    }

  }

  getInternships() {
    const url = 'https://enigmatic-sierra-91538.herokuapp.com/api/internship/all';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhd' +
          'WQiOlsidGVzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwi' +
          'c2NvcGUiOlsicmVhZCIsIndyaXRlIl0sImV4cCI6MTU3NjY5OTAzOCwiYXV0aG9yaXRp' +
          'ZXMiOlsiQVBQTElDQU5UIl0sImp0aSI6ImJjMjEyM2Y2LWVmMTQtNDg0Zi1hZjdlLTli' +
          'OGVjMzg1ODg2MSIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGllbnRpZCJ9.ekCWKdN7VuQ' +
          'bN9rOexqF07P0B1u2KsiroEOQdsT51Nk'
      })
    };
    if (this.internshipSubject) {
      return this.internshipSubject.asObservable();
    } else {
      this.internshipSubject = new ReplaySubject(1);
      this.httpClient.get<Internship[]>(url, httpOptions).subscribe(data => this.internshipSubject.next(data));
      return this.internshipSubject.asObservable();
    }
  }

  getCompanies() {
    return this.companyList.asObservable();
    // const url = 'http://enigmatic-sierra-91538.herokuapp.com/api/company/all';
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidG' +
    //       'VzdGp3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwic2NvcGUiOlsicmVh' +
    //       'ZCIsIndyaXRlIl0sImV4cCI6MTU3NDgyNDEwNSwiYXV0aG9yaXRpZXMiOlsiQVBQTElDQU5UIl' +
    //       '0sImp0aSI6IjZkY2RmYzk1LTc4YzMtNDE3MS1iZGM5LTc2MjJlOTViNmRlMCIsImNsaWVudF9pZ' +
    //       'CI6InRlc3Rqd3RjbGllbnRpZCJ9.n7vWD-ZyLxWBf2Dr4wTKKI4uCFF7KFknDoP900Nharg'
    //   })
    // };
    // return this.httpClient.get<Company[]>(url, this.httpOptions);
  }

  getSkills() {
    // const url = 'http://enigmatic-sierra-91538.herokuapp.com/api/skill/all';
    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp' +
    //       '3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwic2NvcGUiOlsicmVhZCIsIndya' +
    //       'XRlIl0sImV4cCI6MTU3NTkzNzQ2MCwiYXV0aG9yaXRpZXMiOlsiQVBQTElDQU5UIl0sImp0aSI6ImI' +
    //       'wMDdjZTYwLWIyYWMtNDFiYi04ZjM0LTM4YzU0OWE1NmViZCIsImNsaWVudF9pZCI6InRlc3Rqd3Rj' +
    //       'bGllbnRpZCJ9.3vQ0cLxYBbuB-2Lmf-rgsLWEdfBb3LdfDCb9169l8CU'
    //   })
    // };
    // return this.httpClient.get<Skill[]>(url, httpOptions);
    return this.skillList.asObservable();
  }

  getInternshipSkills(idInternship: number) {
    const url = 'http://enigmatic-sierra-91538.herokuapp.com/api/internship/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp' +
          '3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiY29tcGFueSIsInNjb3BlIjpbInJlYWQiLCJ3cml0Z' +
          'SJdLCJleHAiOjE1NzY3MDYyMjksImF1dGhvcml0aWVzIjpbIkNPTVBBTlkiXSwianRpIjoiYTYzZDd' +
          'lZWYtNTMzYy00MGQzLWE2YWYtNmFhZTM0YjI3MTY0IiwiY2xpZW50X2lkIjoidGVzdGp3dGNsaWVud' +
          'GlkIn0.YgL9w9v1g6JvOg3_lspms7uMPCpBRMmjkR_I9grAVYY'
      })
    };
    return this.httpClient.get<Skill[]>(url + idInternship + '/skills', httpOptions);
  }

  getInternshipsForCompany(idCompany: number) {
    const url = 'http://enigmatic-sierra-91538.herokuapp.com/api/internship/all/company/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp' +
          '3dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwic2NvcGUiOlsicmVhZCIsIndya' +
          'XRlIl0sImV4cCI6MTU3MjYzODAxNCwiYXV0aG9yaXRpZXMiOlsiQVBQTElDQU5UIl0sImp0aSI6Ijdk' +
          'MDg4NDM5LTkzMjUtNDA2Yi1hNWQyLTJkOTAzYzQzMmVhYiIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGl' +
          'lbnRpZCJ9.tgaxNfcl4SqHWM2FT30f5d_I4HFgAAnTbKwIU7VYFrY'
      })
    };
    return this.httpClient.get<Internship[]>(url + idCompany, httpOptions);
  }

  getInternshipLogo(idInternship: number) {
    const url = 'http://enigmatic-sierra-91538.herokuapp.com/api/internship/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3' +
          'dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwic2NvcGUiOlsicmVhZCIsIndyaXR' +
          'lIl0sImV4cCI6MTU3NjY5OTAzOCwiYXV0aG9yaXRpZXMiOlsiQVBQTElDQU5UIl0sImp0aSI6ImJjMj' +
          'EyM2Y2LWVmMTQtNDg0Zi1hZjdlLTliOGVjMzg1ODg2MSIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGllb' +
          'nRpZCJ9.ekCWKdN7VuQbN9rOexqF07P0B1u2KsiroEOQdsT51Nk'
      })
    };
    return this.httpClient.get(url + idInternship + '/logo', httpOptions);
  }

  getInternshipTags(idInternship: number) {
    const url = 'http://enigmatic-sierra-91538.herokuapp.com/api/internship/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3' +
          'dHJlc291cmNlaWQiXSwidXNlcl9uYW1lIjoiY29tcGFueSIsInNjb3BlIjpbInJlYWQiLCJ3cml0ZSJd' +
          'LCJleHAiOjE1NzY3MDYyMjksImF1dGhvcml0aWVzIjpbIkNPTVBBTlkiXSwianRpIjoiYTYzZDdlZWYtN' +
          'TMzYy00MGQzLWE2YWYtNmFhZTM0YjI3MTY0IiwiY2xpZW50X2lkIjoidGVzdGp3dGNsaWVudGlkIn0.YgL' +
          '9w9v1g6JvOg3_lspms7uMPCpBRMmjkR_I9grAVYY'
      })
    };
    return this.httpClient.get<Tag[]>(url + idInternship + '/tags', httpOptions);
  }

  getInternshipCompany(idInternship: number) {
    console.log(idInternship);
    const url = 'http://enigmatic-sierra-91538.herokuapp.com/api/internship/';
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOlsidGVzdGp3dHJ' +
          'lc291cmNlaWQiXSwidXNlcl9uYW1lIjoiYXBwbGljYW50Iiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm' +
          'V4cCI6MTU3NjY5OTAzOCwiYXV0aG9yaXRpZXMiOlsiQVBQTElDQU5UIl0sImp0aSI6ImJjMjEyM2Y2LWVmM' +
          'TQtNDg0Zi1hZjdlLTliOGVjMzg1ODg2MSIsImNsaWVudF9pZCI6InRlc3Rqd3RjbGllbnRpZCJ9.ekCWKd' +
          'N7VuQbN9rOexqF07P0B1u2KsiroEOQdsT51Nk'
      })
    };
    return this.httpClient.get<Company>(url + idInternship + '/company', httpOptions);
  }

  setCompanyFilters(filters: Company[]) {
    this.companyFilters = filters;
    this.companySubject.next(this.companyFilters);
  }

  setSkillFilters(filters: string[]) {
    this.skillFilters = filters;
    this.skillSubject.next(this.skillFilters);
  }
}

