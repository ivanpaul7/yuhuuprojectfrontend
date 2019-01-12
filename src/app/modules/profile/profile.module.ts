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
import {CompanyProfileEditBasicComponent} from './components/company-profile-edit-basic/company-profile-edit-basic.component';
import {CompanyProfileEditContactComponent} from './components/company-profile-edit-contact/company-profile-edit-contact.component';
import {CompanyProfileEditMapComponent} from './components/company-profile-edit-map/company-profile-edit-map.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {StudentProfileCvViewComponent} from './components/student-profile-cv-view/student-profile-cv-view.component';

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
    AgmCoreModule,
    PdfViewerModule
  ],
  declarations: [
    CompanyProfilePageComponent,
    MapComponent,
    StudentProfileEditEducationComponent,
    StudentProfileEditSkillsComponent,
    StudentProfileEditContactComponent,
    StudentProfileEditBasicComponent,
    EducationComponent,
    CompanyProfileEditBasicComponent,
    CompanyProfileEditContactComponent,
    CompanyProfileEditMapComponent,
    StudentProfileCvViewComponent
  ],
  entryComponents: [
    StudentProfileEditEducationComponent,
    StudentProfileEditSkillsComponent,
    StudentProfileEditContactComponent,
    StudentProfileEditBasicComponent,
    CompanyProfileEditBasicComponent,
    CompanyProfileEditContactComponent,
    CompanyProfileEditMapComponent,
    StudentProfileCvViewComponent
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
