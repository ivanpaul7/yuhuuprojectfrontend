import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InternshipDetailsPageComponent} from './pages/internship-details-page/internship-details-page.component';
import {InternshipsPageComponent} from './pages/internships-page/internships-page.component';
import {AuthGuard} from '../guard/auth-guard.service';

const internshipsRoutes: Routes = [
  {
    path: 'internships',
    component: InternshipsPageComponent,
    canActivate: [AuthGuard]
  },
  {path: 'internships/:id', component: InternshipDetailsPageComponent, canActivate: [AuthGuard]},

];

@NgModule({
  imports: [
    RouterModule.forChild(internshipsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InternshipsRoutingModule {
}
