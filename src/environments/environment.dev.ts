import {MockInternshipsService} from 'src/app/modules/internships/services/internships.service';
import {MockCompaniesService} from '../app/modules/companies/services/companies.service';
import {MockCompanyDetailsService} from '../app/modules/companies/services/company-details.service';
import {MockInternshipDetailsService} from '../app/modules/internships/services/internship-details.service';
import {MockLoginService} from '../app/modules/login/services/login.service';
import {MockRegisterService} from '../app/modules/login/services/register.service';
import {MockCompanyProfileService} from '../app/modules/profile/services/company-profile.service';
import {MockStudentProfileService} from '../app/modules/profile/services/student-profile.service';
import {MockChatService} from '../app/modules/internships/services/chat.service';

export const environment = {
  production: true,
  titleEnvironment: 'Development Yuhuuuu',
  imageTestLink: 'https://images.pexels.com/photos/546232/pexels-photo-546232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  environmentTestText: 'Dev is on',
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
