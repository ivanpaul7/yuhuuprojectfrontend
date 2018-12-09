import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockInternshipDetailsService } from './services/internship-details.service';
import { InternshipDetailsComponent } from './components/internship-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [InternshipDetailsComponent],
  exports: [InternshipDetailsComponent],
  providers: [ MockInternshipDetailsService ]
})
export class InternshipDetailsModule { }
