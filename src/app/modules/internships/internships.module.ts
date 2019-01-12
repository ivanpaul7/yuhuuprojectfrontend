import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InternshipsRoutingModule } from './internships-routing.module';
import { InternshipListComponent } from './components/internship-list/internship-list.component';
import { InternshipListItemComponent } from './components/internship-list-item/internship-list-item.component';
import { InternshipsService } from './services/internships.service';
import { environment } from '../../../environments/environment';

import {
  MatAutocompleteModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule, MatDividerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatListModule,
} from '@angular/material';
import { FiltersComponent } from './components/filters/filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InternshipDetailsComponent } from './components/internship-details/internship-details.component';
import { AbstractInternshipDetailsService } from './services/internship-details.service';

@NgModule({
  imports: [
    CommonModule,
    InternshipsRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatExpansionModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule, MatDividerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
  ],
  declarations: [InternshipListComponent, InternshipListItemComponent, FiltersComponent, InternshipDetailsComponent],
  exports: [InternshipListComponent, InternshipListItemComponent, FiltersComponent, InternshipDetailsComponent],
  providers: [InternshipsService, {
    provide: AbstractInternshipDetailsService,
    useClass: environment.internshipDetailsService
  }]
})
export class InternshipsModule {
}
