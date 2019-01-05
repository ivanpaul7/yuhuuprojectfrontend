import {MockLoginService} from '../app/modules/login/services/login.service';
import {MockRegisterService} from '../app/modules/login/services/register.service';
import {MockStudentProfileService} from '../app/modules/profile/services/student-profile.service';
import {MockCompanyProfileService} from '../app/modules/profile/services/company-profile.service';
import {MockCompaniesService} from '../app/modules/companies/services/companies.service';

export const environment = {
  production: true,
  titleEnvironment: 'Development Yuhuuuu',
  imageTestLink: 'https://images.pexels.com/photos/546232/pexels-photo-546232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  environmentTestText: 'Dev is on',
  loginService: MockLoginService,
  registerService: MockRegisterService,
  studentProfileService: MockStudentProfileService,
  companyProfileService: MockCompanyProfileService,
  companiesService: MockCompaniesService
};
