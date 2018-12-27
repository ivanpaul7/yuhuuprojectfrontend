import {Routes} from '@angular/router';
import {StudentProfilePageComponent} from './pages/student-profile-page/student-profile-page.component';
import {CompanyProfilePageComponent} from './pages/company-profile-page/company-profile-page.component';

export interface NavbarItem {
  title: string;
  path: string;
}

export const profileRoutes: Routes = [
  {path: 'profile/student/:id', component: StudentProfilePageComponent},
  {path: 'profile/company', component: CompanyProfilePageComponent}
];
