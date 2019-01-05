import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {InternshipsRoutingModule} from './internships-routing.module';
import {InternshipListComponent} from './components/internship-list/internship-list.component';
import {InternshipListItemComponent} from './components/internship-list-item/internship-list-item.component';
import {InternshipsService} from './services/internships.service';
import {
  MatAutocompleteModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule
} from '@angular/material';
import {FiltersComponent} from './components/filters/filters.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ChatComponent } from './components/chat/chat.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    NgbModule
  ],
  declarations: [InternshipListComponent, InternshipListItemComponent, FiltersComponent, ChatComponent],
  exports: [InternshipListComponent, InternshipListItemComponent, ChatComponent],
  providers: [InternshipsService]
})
export class InternshipsModule {
}
