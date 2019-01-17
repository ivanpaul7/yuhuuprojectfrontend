import { MockCompaniesService } from 'src/app/modules/companies/services/companies.service';
import { MockCompanyDetailsService } from 'src/app/modules/companies/services/company-details.service';
import { MockInternshipsService } from 'src/app/modules/internships/services/internships.service';
import { MockInternshipDetailsService } from '../app/modules/internships/services/internship-details.service';
import { MockLoginService } from '../app/modules/login/services/login.service';
import { MockRegisterService } from '../app/modules/login/services/register.service';
import { MockCompanyProfileService } from '../app/modules/profile/services/company-profile.service';
import { MockStudentProfileService } from '../app/modules/profile/services/student-profile.service';
import {MockChatService} from '../app/modules/internships/services/chat.service';

export const environment = {
  production: false,
  titleEnvironment: 'Yuhuuuu',
  imageTestLink: 'https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  environmentTestText: 'Hello',
  loginService: MockLoginService,
  registerService: MockRegisterService,
  studentProfileService: MockStudentProfileService,
  companyProfileService: MockCompanyProfileService,
  internshipDetailsService: MockInternshipDetailsService,
  internshipsService: MockInternshipsService,
  companiesService: MockCompaniesService,
  companyDetailsService: MockCompanyDetailsService,
  chatService: MockChatService
};
