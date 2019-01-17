import {ServerInternshipsService} from 'src/app/modules/internships/services/internships.service';
import {ServerCompaniesService} from '../app/modules/companies/services/companies.service';
import {ServerCompanyDetailsService} from '../app/modules/companies/services/company-details.service';
import {ServerInternshipDetailsService} from '../app/modules/internships/services/internship-details.service';
import {ServerLoginService} from '../app/modules/login/services/login.service';
import {ServerRegisterService} from '../app/modules/login/services/register.service';
import {ServerCompanyProfileService} from '../app/modules/profile/services/company-profile.service';
import {ServerStudentProfileService} from '../app/modules/profile/services/student-profile.service';
import {ServerChatService} from '../app/modules/internships/services/chat.service';

export const environment = {
  production: true,
  titleEnvironment: 'Prod Yuhuuuu',
  imageTestLink: 'https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  environmentTestText: 'Prod is on',
  loginService: ServerLoginService,
  registerService: ServerRegisterService,
  studentProfileService: ServerStudentProfileService,
  companyProfileService: ServerCompanyProfileService,
  internshipDetailsService: ServerInternshipDetailsService,
  internshipsService: ServerInternshipsService,
  companiesService: ServerCompaniesService,
  companyDetailsService: ServerCompanyDetailsService,
  chatService: ServerChatService
};
