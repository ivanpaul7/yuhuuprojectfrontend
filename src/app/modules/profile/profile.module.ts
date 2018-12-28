import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule, MatDividerModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatListModule,
  MatIconModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CompanyProfilePageComponent} from './pages/company-profile-page/company-profile-page.component';
import {CompanyProfileEditComponentComponent} from './components/company-profile-edit-component/company-profile-edit-component.component';
import {environment} from '../../../environments/environment';
import {AbstractStudentProfileService} from './services/student-profile.service';
import {AbstractCompanyProfileService} from './services/company-profile.service';
import {profileRoutes} from './profile.routing';
import {RouterModule} from '@angular/router';
import {MapComponent} from './components/map/map.component';
import {AgmCoreModule} from '@agm/core';
import {StudentProfileEditEducationComponent} from './components/student-profile-edit-education/student-profile-edit-education.component';
import {StudentProfileEditSkillsComponent} from './components/student-profile-edit-skills/student-profile-edit-skills.component';
import {StudentProfileEditContactComponent} from './components/student-profile-edit-contact/student-profile-edit-contact.component';
import {StudentProfileEditBasicComponent} from './components/student-profile-edit-basic/student-profile-edit-basic.component';
import {EducationComponent} from './components/education/education.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatDividerModule,
    MatListModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forChild(profileRoutes),
    AgmCoreModule
  ],
  declarations: [
    CompanyProfilePageComponent,
    CompanyProfileEditComponentComponent,
    MapComponent,
    StudentProfileEditEducationComponent,
    StudentProfileEditSkillsComponent,
    StudentProfileEditContactComponent,
    StudentProfileEditBasicComponent,
    EducationComponent
  ],
  entryComponents: [
    StudentProfileEditEducationComponent,
    StudentProfileEditSkillsComponent,
    StudentProfileEditContactComponent,
    StudentProfileEditBasicComponent,
    CompanyProfileEditComponentComponent
  ],
  providers: [
    {
      provide: AbstractStudentProfileService,
      useClass: environment.studentProfileService
    },
    {
      provide: AbstractCompanyProfileService,
      useClass: environment.companyProfileService
    },
  ],
  exports: [
    RouterModule,
    EducationComponent
  ]
})
export class ProfileModule {
}
