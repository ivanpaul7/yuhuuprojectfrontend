import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipDetailsPageComponent } from './pages/internship-details-page/internship-details-page.component';
import { InternshipsPageComponent } from './pages/internships-page/internships-page.component';

const internshipsRoutes: Routes = [
  {
    path: 'internships',
    component: InternshipsPageComponent,
  },
  { path: 'internships/:id', component: InternshipDetailsPageComponent },

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
