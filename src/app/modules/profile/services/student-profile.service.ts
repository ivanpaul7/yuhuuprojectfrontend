import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {Applicant} from '../../../shared/model/Applicant';
import {catchError, tap} from 'rxjs/operators';
import {st} from '@angular/core/src/render3';
import {Education} from '../../../shared/model/Education';
import {Skill} from '../../../shared/model/Skill';

export abstract class AbstractStudentProfileService {
  applicant: Applicant;
  educations: Education[];
  skills: Skill[];

  public abstract getStudentProfile(id: number): Observable<Applicant> ;

  public abstract updateStudentProfileBasic(studentProfile: Applicant): Observable<Applicant>

  public abstract updateStudentProfile(studentProfile: Applicant): Observable<Applicant>

  public abstract updateStudentProfileContact(applicant: Applicant): Observable<Applicant>

  public abstract getEducationForApplicant(id: number): Observable<Education[]>

  public abstract addEducation(id: number, education: Education): Observable<Boolean>

  public abstract deleteEducation(id: number): Observable<Boolean>

  public abstract getSkillsForApplicant(): Observable<Skill[]>

  public abstract addSkill(skill: Skill): Observable<Boolean>

  public abstract deleteSkill(id: number): Observable<Boolean>
}


@Injectable({
  providedIn: 'root'
})
export class MockStudentProfileService implements AbstractStudentProfileService {
  mockId: number = 100;
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
          'roleString': 'APPLICANT'
        }
      ]
    },
    'firstName': 'Liam',
    'lastName': 'Neeson',
    'birthday': '1952-06-07',
    'description': 'Born in Northern Ireland in 1952, Liam Neeson began pursuing an acting career in the mid-1970s. His breakout role came with the Holocaust drama Schindler\'s List, for which he garnered an Academy Award nomination. Neeson also starred in Star Wars: Episode I and Kinsey, before claiming a string of action-hero roles in flicks like Taken. He has also supplied voice work for hit family films like The Chronicles of Narnia and The LEGO Movie. ',
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
        'url': null,
        'public_id': null,
        'path': 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Liam_Neeson_Deauville_2012_2.jpg/220px-Liam_Neeson_Deauville_2012_2.jpg'
      },
      'cv': {
        'id': 23,
        'url': null,
        'public_id': null,
        'path': 'https://europass.cedefop.europa.eu/sites/default/files/europass_cv_instructions_ro.pdf'
      }
    }
  };
  educations: Education[] = [
    {
      'id': 1,
      'name': 'Mathematics',
      'startDate': '2012-09-12',
      'endDate': '2016-07-01',
      'schoolTitle': 'Nicolae Balcescu Theoretical High School',
      'degree': 'High School Diploma',
      'schoolLocation': 'Cluj-Napoca'
    },
    {
      'id': 2,
      'name': 'Computer Science',
      'startDate': '2016-10-03',
      'endDate': '2019-07-01',
      'schoolTitle': 'University \'Babes-Bolyai\'',
      'degree': 'Bachelor\'s Degrees',
      'schoolLocation': 'Cluj-Napoca'
    },
    {
      'id': 3,
      'name': 'Computer Science',
      'startDate': '2019-10-03',
      'endDate': '2021-07-01',
      'schoolTitle': 'University \'Babes-Bolyai\'',
      'degree': 'Master\'s degree',
      'schoolLocation': 'Cluj-Napoca'
    },
    {
      'id': 4,
      'name': 'Computer Science',
      'startDate': '2021-10-03',
      'endDate': '2023-07-01',
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

  //todo delete http :)
  constructor(private http: HttpClient) {
  }

  getStudentProfile(id: number): Observable<Applicant> {
    return of(this.applicant);
  }

  updateStudentProfile(studentProfile: Applicant): Observable<Applicant> {
    return this.mockUpdate(studentProfile);
  }

  updateStudentProfileBasic(studentProfile: Applicant): Observable<Applicant> {
    return this.mockUpdate(studentProfile);
  }

  updateStudentProfileContact(studentProfile: Applicant): Observable<Applicant> {
    return this.mockUpdate(studentProfile);
  }

  private mockUpdate(studentProfile: Applicant): Observable<Applicant> {
    this.applicant = studentProfile;
    return of(this.applicant);
  }

  getEducationForApplicant(id: number): Observable<Education[]> {
    return of(this.educations);
  }

  addEducation(id: number, education: Education): Observable<Boolean> {
    education.id = this.mockId;
    this.mockId = this.mockId + 1;
    this.educations.push(education);
    return of(true);
  }

  deleteEducation(id: number): Observable<Boolean> {
    var i = this.educations.length;
    while (i--) {
      if (this.educations[i].id == id) {
        this.educations.splice(i, 1);
      }
    }
    return of(true);
  }

  addSkill(skill: Skill): Observable<Boolean> {
    skill.id = this.mockId;
    this.mockId = this.mockId + 1;
    this.skills.push(skill);
    return of(true);
  }

  deleteSkill(id: number): Observable<Boolean> {
    var i = this.skills.length;
    while (i--) {
      if (this.skills[i].id == id) {
        this.skills.splice(i, 1);
      }
    }
    return of(true);
  }

  getSkillsForApplicant(): Observable<Skill[]> {
    return of(this.skills);
  }
}


@Injectable({
  providedIn: 'root'
})
export class ServerStudentProfileService implements AbstractStudentProfileService {
  applicant: Applicant;
  educations: Education[];
  skills: Skill[];
  private studentsProfilesUrl = 'api/studentsProfiles';  // URL to web api

  constructor(private http: HttpClient) {
  }

  /** GET student profile by id. Will 404 if id not found */
  getStudentProfile(id: number): Observable<Applicant> {
    const url = `${this.studentsProfilesUrl}/${id}`;
    return this.http.get<Applicant>(url).pipe(
      tap(_ => this.log(`fetched StudentProfile id=${id}`)),
      catchError(this.handleError<Applicant>(`getStudentProfile id=${id}`))
    );
  }

  /** PUT: update the Applicant on the server */
  updateStudentProfile(studentProfile: Applicant): Observable<Applicant> {
    return this.http.put(this.studentsProfilesUrl, studentProfile, httpOptions).pipe(
      tap(_ => this.log(`ssupdated Student's Profile id=${studentProfile.id}`)),
      catchError(this.handleError<any>('updateStudentProfile'))
    );
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

  updateStudentProfileBasic(studentProfile: Applicant): Observable<Applicant> {
    return undefined;
  }

  updateStudentProfileContact(studentProfile: Applicant): Observable<Applicant> {
    return undefined;
  }

  getEducationForApplicant(id: number): Observable<Education[]> {
    return undefined;
  }

  addEducation(id: number, education: Education): Observable<Boolean> {
    return undefined;
  }

  deleteEducation(id: number): Observable<Boolean> {
    return undefined;
  }

  addSkill(skill: Skill): Observable<Boolean> {
    return undefined;
  }

  deleteSkill(id: number): Observable<Boolean> {
    return undefined;
  }

  getSkillsForApplicant(): Observable<Skill[]> {
    return undefined;
  }

}


const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
