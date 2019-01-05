import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipDetailsPageComponent } from './pages/internship-details-page/internship-details-page.component';

const internshipDetailsRoutes: Routes = [
  {
    path: 'internships/:id',
    component: InternshipDetailsPageComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(internshipDetailsRoutes)
  ],
exports: [
    RouterModule
  ]
})
export class InternshipDetailsRoutingModule { }
