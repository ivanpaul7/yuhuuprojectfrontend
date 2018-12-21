import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const studentsProfiles = [
      {
        id: 1,
        firstName: 'Rares',
        lastName: 'Beltechi',
        faculty: 'UBB Matematica si Informatica',
        phone: '0740111222',
        email: 'rares@mail.com',
        linkedinPage: 'https://www.linkedin.com/in/beltechi-rares-9a6109103/',
        facebookPage: 'https://www.facebook.com/rareess',
        description: 'Experienced Director of Marketing Operations with a ' +
          'demonstrated history of working in education software, telecom, ' +
          'semiconductor, and real estate industries. Skilled in Marketing ' +
          'Operations and Automation, Customer Relationship Management (CRM), ' +
          'Business Intelligence and Analytics'
      },
      {
        id: 2,
        firstName: 'Ioana',
        lastName: 'Cristescu',
        faculty: 'UBB Matematica si Informatica',
        phone: '0740222111',
        email: 'ioana@mail.com',
        linkedinPage: 'https://www.linkedin.com/in/ioana/',
        facebookPage: 'https://www.facebook.com/ioana',
        description: 'Experienced Product Manager conversant in enterprise, ' +
          'web and mobile technologies, information protection, ' +
          'biometrics and SAAS offerings in the collaboration space. ' +
          'Skilled at defining emerging product vision while taking ' +
          'pragmatic steps driven by present market needs and resource ' +
          'constraints. Experience in driving a compelling user experience, ' +
          'featuring beautiful interfaces and natural workflows. Good communicator, ' +
          'effective manager in multicultural organizations.'
      }
    ];
    return {studentsProfiles};
  }
}
