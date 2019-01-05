import {AbstractLoginService, MockLoginService} from '../app/modules/login/services/login.service';
import {MockRegisterService} from '../app/modules/login/services/register.service';
import {MockInternshipDetailsService} from '../app/modules/internship-details/services/internship-details.service'

export const environment = {
  production: true,
  titleEnvironment: 'Development Yuhuuuu',
  imageTestLink: 'https://images.pexels.com/photos/546232/pexels-photo-546232.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  environmentTestText: 'Dev is on',
  loginService: MockLoginService,
  registerService: MockRegisterService,
  internshipDetailsService: MockInternshipDetailsService
};
