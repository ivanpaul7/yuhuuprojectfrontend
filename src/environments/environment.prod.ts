import {ServerLoginService} from '../app/modules/login/services/login.service';
import {ServerRegisterService} from '../app/modules/login/services/register.service';
import {ServerInternshipDetailsService} from '../app/modules/internship-details/services/internship-details.service'


export const environment = {
  production: true,
  titleEnvironment: 'Prod Yuhuuuu',
  imageTestLink: 'https://images.pexels.com/photos/1539225/pexels-photo-1539225.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
  environmentTestText: 'Prod is on',
  loginService: ServerLoginService,
  registerService: ServerRegisterService,
  internshipDetailsService: ServerInternshipDetailsService
};
