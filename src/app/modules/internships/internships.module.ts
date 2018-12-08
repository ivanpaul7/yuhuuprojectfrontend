import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InternshipsRoutingModule } from './internships-routing.module';
import { InternshipListComponent } from './components/internship-list/internship-list.component';
import { InternshipListItemComponent } from './components/internship-list-item/internship-list-item.component';
import { InternshipsService } from './services/internships.service';
import { MatCardModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    InternshipsRoutingModule,
    MatCardModule
  ],
  declarations: [InternshipListComponent, InternshipListItemComponent],
  exports: [InternshipListComponent, InternshipListItemComponent],
  providers: [InternshipsService]
})
export class InternshipsModule { }
