import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Applicant} from '../../../shared/model/Applicant';
import {tap} from 'rxjs/operators';
import {Education} from '../../../shared/model/Education';
import {Skill} from '../../../shared/model/Skill';
import {Role} from '../../../shared/model/Role';
import {Photo} from '../../../shared/model/Photo';
import * as $ from 'node_modules/jquery/dist/jquery.js';
import {SessionManagementService} from '../../../shared/utils/session-management.service';

export abstract class AbstractStudentProfileService {
  applicant: Applicant;
  educations: Education[];
  skills: Skill[];
  allSkills: Skill[];

  public abstract initialize();

  public abstract getStudentProfile(id: number): Observable<Applicant> ;

  public abstract updateStudentProfileBasic(studentProfile: Applicant): Observable<Applicant>;

  public abstract updateStudentProfileContact(applicant: Applicant): Observable<Applicant>;

  public abstract updateStudentProfileEmail(applicant: Applicant): Observable<Applicant>;

  public abstract getEducationForApplicant(): Observable<Education[]>;

  public abstract addEducation(id: number, education: Education): Observable<Applicant>;

  public abstract deleteEducation(id: number): Observable<Applicant>;

  public abstract getSkillsForApplicant(): Observable<Skill[]>;

  public abstract getListAllSkills(): Observable<Skill[]>;

  public abstract addSkill(skill: Skill): Observable<Applicant>;

  public abstract deleteSkill(id: number): Observable<Applicant>;

  public abstract uploadPhoto(uploadData: FormData);

  public abstract uploadCV(uploadData: FormData);

  public abstract isHisProfile(): boolean;
}


@Injectable({
  providedIn: 'root'
})
export class MockStudentProfileService implements AbstractStudentProfileService {
  mockId = 100;
  applicant: Applicant = {
    'id': 16,
    'user': {
      'id': 2,
      'username': 'applicant',
      'email': 'applicant@yuhuu.com',
      'password': '{bcrypt}$2a$10$ZvUeM7o1sIP9U.neWTVJYObELhV5b2NPjQpmmwn6MKVHffaGNMUf6',
      'active': true,
      'roles': [
        {
          'roleId': 11,
          'roleString': Role.RoleStringEnum.APPLICANT
        }
      ]
    },
    'firstName': 'Liam',
    'lastName': 'Neeson',
    'birthday': new Date('1952-06-07'),
    'description': 'Born in Northern Ireland in 1952, Liam Neeson began pursuing an acting career ' +
      'in the mid-1970s. His breakout role came with the Holocaust drama Schindler\'s List, ' +
      'for which he garnered an Academy Award nomination. Neeson also starred in Star Wars: ' +
      'Episode I and Kinsey, before claiming a string of action-hero roles in flicks like Taken. ' +
      'He has also supplied voice work for hit family films like The Chronicles of Narnia and The ' +
      'LEGO Movie. ',
    'contact': {
      'id': 20,
      'phoneNumber': '0758426882',
      'facebookLink': 'https://www.facebook.com/Liam-Neeson-fanpage-157400814307801/',
      'website': 'https://www.imdb.com/name/nm0000553/',
      'linkedinLink': 'https://www.linkedin.com/in/rad/',
      'address': {
        'id': 21,
        'latitude': 1000,
        'longitude': 1000,
        'country': 'Romania',
        'county': 'Cluj',
        'sector': '-',
        'postalCode': '505200',
        'town': 'Cluj-Napoca',
        'street': 'Iuliu Maniu',
        'number': '2',
        'block': '3',
        'entrance': '4',
        'floor': '5',
        'apartment': '6'
      },
      'photo': {
        'id': 22,
        'url': 'http://res.cloudinary.com/yuhuubackend/image/upload/v1546683243/fuarlcqjs93dlhh6lupc.jpg',
        'publicId': null,
        'path': 'http://res.cloudinary.com/yuhuubackend/image/upload/v1546683243/fuarlcqjs93dlhh6lupc.jpg'
      },
      'cv': {
        'id': 23,
        'url': 'http://res.cloudinary.com/yuhuubackend/raw/upload/v1546682795/hsahlamrdhcpwgdmecl9',
        'publicId': null,
        'path': 'https://aussiebet.com/wp-content/uploads/2018/01/betfair.png'
      }
    }
  };
  educations: Education[] = [
    {
      'id': 1,
      'name': 'Mathematics',
      'startDate': new Date('2012-09-12'),
      'endDate': new Date('2016-07-01'),
      'schoolTitle': 'Nicolae Balcescu Theoretical High School',
      'degree': 'High School Diploma',
      'schoolLocation': 'Cluj-Napoca'
    },
    {
      'id': 2,
      'name': 'Computer Science',
      'startDate': new Date('2016-10-03'),
      'endDate': new Date('2019-07-01'),
      'schoolTitle': 'University \'Babes-Bolyai\'',
      'degree': 'Bachelor\'s Degrees',
      'schoolLocation': 'Cluj-Napoca'
    },
    {
      'id': 3,
      'name': 'Computer Science',
      'startDate': new Date('2019-10-03'),
      'endDate': new Date('2021-07-01'),
      'schoolTitle': 'University \'Babes-Bolyai\'',
      'degree': 'Master\'s degree',
      'schoolLocation': 'Cluj-Napoca'
    },
    {
      'id': 4,
      'name': 'Computer Science',
      'startDate': new Date('2021-10-03'),
      'endDate': new Date('2023-07-01'),
      'schoolTitle': 'University \'Babes-Bolyai\'',
      'degree': 'Doctoral degree',
      'schoolLocation': 'Cluj-Napoca'
    }
  ];
  skills: Skill[] = [
    {
      'id': 1,
      'name': 'Java'
    },
    {
      'id': 2,
      'name': 'C#'
    }
  ];
  allSkills: Skill[] = [
    {
      'id': 23,
      'name': 'Java'
    },
    {
      'id': 24,
      'name': 'C#'
    },
    {
      'id': 25,
      'name': 'Javascript'
    },
    {
      'id': 26,
      'name': 'Hadoop'
    },
    {
      'id': 27,
      'name': 'F#'
    },
    {
      'id': 28,
      'name': 'Go'
    },
    {
      'id': 29,
      'name': 'Erlang'
    }
  ];

  // todo delete http :)
  constructor(private http: HttpClient) {
  }

  getStudentProfile(id: number): Observable<Applicant> {
    return of(this.applicant);
  }

  updateStudentProfileBasic(studentProfile: Applicant): Observable<Applicant> {
    return this.mockUpdate(studentProfile);
  }

  updateStudentProfileContact(studentProfile: Applicant): Observable<Applicant> {
    return this.mockUpdate(studentProfile);
  }

  updateStudentProfileEmail(studentProfile: Applicant): Observable<Applicant> {
    return this.mockUpdate(studentProfile);
  }

  private mockUpdate(studentProfile: Applicant): Observable<Applicant> {
    this.applicant = studentProfile;
    return of(this.applicant);
  }

  getEducationForApplicant(): Observable<Education[]> {
    return of(this.educations);
  }

  addEducation(id: number, education: Education): Observable<Applicant> {
    education.id = this.mockId;
    this.mockId = this.mockId + 1;
    this.educations.push(education);
    return of(this.applicant);
  }

  deleteEducation(id: number): Observable<Applicant> {
    let i = this.educations.length;
    while (i--) {
      if (this.educations[i].id === id) {
        this.educations.splice(i, 1);
      }
    }
    return of(this.applicant);
  }

  addSkill(skill: Skill): Observable<Applicant> {
    skill.id = this.mockId;
    this.mockId = this.mockId + 1;
    this.skills.push(skill);
    return of(this.applicant);
  }

  deleteSkill(id: number): Observable<Applicant> {
    let i = this.skills.length;
    while (i--) {
      if (this.skills[i].id === id) {
        this.skills.splice(i, 1);
      }
    }
    return of(this.applicant);
  }

  getSkillsForApplicant(): Observable<Skill[]> {
    return of(this.skills);
  }

  uploadPhoto() {
    // todo: for mock is not necessary
  }

  uploadCV(uploadData: FormData) {
    // todo: for mock is not necessary
  }

  getListAllSkills(): Observable<Skill[]> {
    return of(this.allSkills);
  }

  initialize() {
    // todo: for mock is not necessary
  }

  isHisProfile(): boolean {
    return false;
  }
}


@Injectable({
  providedIn: 'root'
})
export class ServerStudentProfileService implements AbstractStudentProfileService {
  applicant: Applicant;
  educations: Education[];
  skills: Skill[];
  allSkills: Skill[];
  isUserLoggedIn: boolean;
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer x'
      })
  };
  applicantID: number;
  isApplicant: boolean;
  isUsersProfile: boolean = true;

  private url = 'https://enigmatic-sierra-91538.herokuapp.com/api';  // URL to web api

  constructor(private http: HttpClient, private sessionManager: SessionManagementService) {
  }

  initialize() {
    if (this.sessionManager.isUserLoggedIn()) {
      this.httpOptions = {
        headers: new HttpHeaders(
          {
            'Content-Type': 'application/json',
            'Authorization': '' + this.sessionManager.getToken()
          })
      };
      this.applicantID = this.sessionManager.getLoggedUserId();
      this.isApplicant = this.sessionManager.getLoggedUserRole() == Role.RoleStringEnum.APPLICANT;
    } else {
      //todo redirect to login :)
    }
  }

  /** GET student profile by id. Will 404 if id not found */
  getStudentProfile(id: number): Observable<Applicant> {
    if ((!this.isApplicant) || id === this.applicantID) {
      this.isUsersProfile = false;
    }

    return this.http.get<Applicant>(this.url + '/applicant/details/' + id, this.httpOptions).pipe(
      tap(
        data => {
          this.applicant = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  updateStudentProfileBasic(studentProfile: Applicant): Observable<Applicant> {
    return this.http.put<Applicant>(this.url + '/applicant/' + studentProfile.id, studentProfile, this.httpOptions).pipe(
      tap(
        data => {
          this.applicant = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  updateStudentProfileContact(studentProfile: Applicant): Observable<Applicant> {
    return this.http.put<Applicant>(
      this.url + '/applicant/' + studentProfile.id + '/contact',
      studentProfile.contact,
      this.httpOptions
    ).pipe(
      tap(
        data => {
          this.applicant.contact = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  updateStudentProfileEmail(studentProfile: Applicant): Observable<Applicant> {
    if (this.applicant.user.email === studentProfile.user.email) {
      return of(this.applicant);
    }
    return this.http.put<Applicant>(
      this.url + '/applicant/' + studentProfile.id + '/email',
      {'email': studentProfile.user.email},
      this.httpOptions
    ).pipe(
      tap(
        data => {
          this.applicant.user = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  getEducationForApplicant(): Observable<Education[]> {
    return this.http.get<Education[]>(this.url + '/applicant/' + this.applicant.id + '/educations', this.httpOptions).pipe(
      tap(
        data => {
          this.educations = data;
        },
        error => {
        }
      )
    );
  }

  addEducation(id: number, education: Education): Observable<Applicant> {
    return this.http.put<Applicant>(this.url + '/applicant/' + this.applicant.id + '/education', education, this.httpOptions).pipe(
      tap(
        data => {
        },
        error => {
        }
      )
    );
  }

  deleteEducation(id: number): Observable<Applicant> {
    return this.http.delete<Applicant>(this.url + '/applicant/' + this.applicant.id + '/educations/' + id, this.httpOptions).pipe(
      tap(
        data => {
        },
        error => {
        }
      )
    );
  }

  addSkill(skill: Skill): Observable<Applicant> {
    return this.http.put<Applicant>(this.url + '/applicant/' + this.applicant.id + '/skill', skill, this.httpOptions).pipe(
      tap(
        data => {
        },
        error => {
        }
      )
    );
  }

  deleteSkill(id: number): Observable<Applicant> {
    return this.http.delete<Applicant>(this.url + '/applicant/' + this.applicant.id + '/skills/' + id, this.httpOptions).pipe(
      tap(
        data => {
        },
        error => {
        }
      )
    );
  }

  getSkillsForApplicant(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url + '/applicant/' + this.applicant.id + '/skills', this.httpOptions).pipe(
      tap(
        data => {
          this.skills = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }

  getListAllSkills(): Observable<Skill[]> {
    return this.http.get<Skill[]>(this.url + '/skill/all', this.httpOptions).pipe(
      tap(
        data => {
          this.allSkills = data;
        },
        error => {
          console.log(error);
        }
      )
    );
  }


  uploadPhoto(uploadData: FormData) {
    return new Promise((resolve, reject) => {
      const url = 'https://enigmatic-sierra-91538.herokuapp.com/api/applicant/' + this.applicant.id + '/photo';
      $.ajax({
        url: url,
        headers: {
          'Authorization': this.httpOptions.headers.get('Authorization')
        },
        data: uploadData,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function (data) {
          resolve(data);
        },
        error: function (request, status, error) {
          reject(false);
        }
      });
    });
  }

  uploadCV(uploadData: FormData) {
    return new Promise((resolve, reject) => {
      const url = 'https://enigmatic-sierra-91538.herokuapp.com/api/applicant/' + this.applicant.id + '/cv';
      $.ajax({
        url: url,
        headers: {
          'Authorization': this.httpOptions.headers.get('Authorization'),
        },
        data: uploadData,
        contentType: false,
        processData: false,
        type: 'POST',
        success: function (data) {
          resolve(data);
        },
        error: function (request, status, error) {
          reject(false);
        }
      });
    });
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Console log errors */
  private log(message: string) {
    console.log(`StudentProfileService: ${message}`);
  }

  isHisProfile(): boolean {
    return this.isUsersProfile;
  }
}
