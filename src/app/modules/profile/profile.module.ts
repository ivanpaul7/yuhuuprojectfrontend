import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import {MatFormFieldModule, MatOption} from '@angular/material';
import { SkillListComponent } from './pages/skill-list/skill-list.component';
import { StudentProfileEditPageComponent } from './pages/student-profile-edit-page/student-profile-edit-page.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [StudentProfilePageComponent, SkillListComponent, StudentProfileEditPageComponent]
})
export class ProfileModule { }
