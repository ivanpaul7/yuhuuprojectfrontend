import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import {MatFormFieldModule, MatOption} from '@angular/material';
import { StudentProfileEditComponentComponent } from './components/student-profile-edit-component/student-profile-edit-component.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [StudentProfilePageComponent, StudentProfileEditComponentComponent]
})
export class ProfileModule { }
