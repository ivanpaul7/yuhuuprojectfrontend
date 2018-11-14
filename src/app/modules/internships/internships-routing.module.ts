import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InternshipListComponent } from './internship-list/internship-list.component';
import { InternshipListItemComponent } from './internship-list/internship-list-item/internship-list-item.component';

const internshipsRoutes: Routes = [
  {
    path: 'internships',
    component: InternshipListComponent,
    children: [
      {
        path: '',
        redirectTo: '/internships',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: InternshipListItemComponent,
        children: [
          {
            path: '',
            redirectTo: '/:id',
            pathMatch: 'full'
          }
        ]
      },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(internshipsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class InternshipsRoutingModule { }
