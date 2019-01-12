import {Routes} from '@angular/router';
import {DashboardTest1Component} from './components/dashboard-test1/dashboard-test1.component';
import {DashboardTest2Component} from './components/dashboard-test2/dashboard-test2.component';
import {DashboardPageComponent} from './pages/dashboard-page/dashboard-page.component';
import {Home} from './components/home/home.component';

export interface NavbarItem {
  title: string;
  path: string;
}

export const navbarItems: NavbarItem[] = [
  {title: 'Home', path: 'home'},
  {title: 'DashboardTest2Component', path: 'test2'}
];

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: DashboardPageComponent,
    children: [
      {path: 'home', component: Home},
      {path: 'test2', component: DashboardTest2Component}

    ]
  },
];
