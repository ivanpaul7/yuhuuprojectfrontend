import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InternshipDetailsService } from './services/internship-details.service';
import { InternshipDetailsComponent } from './components/internship-details.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [InternshipDetailsComponent],
  exports: [InternshipDetailsComponent],
  providers: [ InternshipDetailsService ]
})
export class InternshipDetailsModule { }
