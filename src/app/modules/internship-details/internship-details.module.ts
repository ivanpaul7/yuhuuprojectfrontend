import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractInternshipDetailsService } from './services/internship-details.service';
import { InternshipDetailsComponent } from './components/internship-details.component';
import { environment } from '../../../environments/environment';
import { MatCardModule, MatCheckboxModule, MatFormFieldModule, MatAutocompleteModule, MatExpansionModule, MatInputModule, MatChipsModule, MatIconModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatExpansionModule,
    MatInputModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [InternshipDetailsComponent],
  exports: [InternshipDetailsComponent],
  providers: [
    {
      provide: AbstractInternshipDetailsService,
      useClass: environment.internshipDetailsService
    }
  ]})
export class InternshipDetailsModule { }
