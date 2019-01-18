import {Routes} from '@angular/router';
import {StudentProfilePageComponent} from './pages/student-profile-page/student-profile-page.component';
import {CompanyProfilePageComponent} from './pages/company-profile-page/company-profile-page.component';
import {AuthGuard} from '../guard/auth-guard.service';

export const profileRoutes: Routes = [
  {path: 'profile/student/:id', component: StudentProfilePageComponent, canActivate: [AuthGuard]},
  {path: 'profile/company/:id', component: CompanyProfilePageComponent, canActivate: [AuthGuard]}
];
