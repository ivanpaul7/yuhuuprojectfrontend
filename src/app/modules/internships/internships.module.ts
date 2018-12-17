import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InternshipsRoutingModule } from './internships-routing.module';
import { InternshipListComponent } from './components/internship-list/internship-list.component';
import { InternshipListItemComponent } from './components/internship-list-item/internship-list-item.component';
import { InternshipsService } from './services/internships.service';
import { MatCardModule, MatCheckboxModule, MatFormFieldModule, MatAutocompleteModule, MatExpansionModule, MatInputModule, MatChipsModule, MatIconModule } from '@angular/material';
import { FiltersComponent } from './components/filters/filters.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    MatIconModule
  ],
  declarations: [InternshipListComponent, InternshipListItemComponent, FiltersComponent],
  exports: [InternshipListComponent, InternshipListItemComponent],
  providers: [InternshipsService]
})
export class InternshipsModule { }
