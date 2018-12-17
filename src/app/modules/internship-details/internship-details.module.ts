import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockInternshipDetailsService } from './services/internship-details.service';
import { InternshipDetailsComponent } from './components/internship-details.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [InternshipDetailsComponent],
  exports: [InternshipDetailsComponent],
  providers: [ MockInternshipDetailsService ]
})
export class InternshipDetailsModule { }
