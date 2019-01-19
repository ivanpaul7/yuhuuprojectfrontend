import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {InternshipsRoutingModule} from './internships-routing.module';
import {InternshipListComponent} from './components/internship-list/internship-list.component';
import {InternshipListItemComponent} from './components/internship-list-item/internship-list-item.component';
import {AbstractInternshipsService} from './services/internships.service';
import {environment} from '../../../environments/environment';

import {
  MatAutocompleteModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule, MatDividerModule,
  MatSelectModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatListModule,
} from '@angular/material';
import {FiltersComponent} from './components/filters/filters.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InternshipDetailsComponent} from './components/internship-details/internship-details.component';
import {AbstractInternshipDetailsService} from './services/internship-details.service';
import {HttpClientModule} from '@angular/common/http';
import {InternshipEditComponent} from './components/internship-edit/internship-edit.component';
import {ChatComponent} from './components/chat/chat.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AbstractChatService} from './services/chat.service';
import {InternshipEditSkillComponent} from './components/internship-edit-skill/internship-edit-skill.component';
import {InternshipEditRequirementComponent} from './components/internship-edit-requirement/internship-edit-requirement.component';
import {SessionManagementService} from '../../shared/utils/session-management.service';
import {AddInternshipComponent} from './components/add-internship/add-internship.component';
import {ApplicantsManagementComponent} from './components/applicants-management/applicants-management.component';
import {RequestMessageSenderComponent} from './components/request-message-sender/request-message-sender.component';
import {MatSnackBarModule} from '@angular/material/typings/esm5/snack-bar';

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
    MatButtonModule,
    HttpClientModule,
    MatDialogModule,
    MatDividerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatListModule,
    MatSnackBarModule,
    NgbModule
  ],
  entryComponents: [InternshipEditComponent, AddInternshipComponent, RequestMessageSenderComponent, InternshipEditSkillComponent, InternshipEditRequirementComponent],
  declarations: [InternshipListComponent,
    InternshipListItemComponent, FiltersComponent,
    InternshipDetailsComponent, InternshipEditComponent, ChatComponent,
    AddInternshipComponent, ApplicantsManagementComponent, RequestMessageSenderComponent,
    InternshipEditSkillComponent, InternshipEditRequirementComponent],
  exports: [InternshipListComponent, InternshipListItemComponent, FiltersComponent, InternshipDetailsComponent, ChatComponent],
  providers: [
    {
      provide: AbstractInternshipsService,
      useClass: environment.internshipsService
    },
    {
      provide: AbstractInternshipDetailsService,
      useClass: environment.internshipDetailsService
    },
    {
      provide: AbstractChatService,
      useClass: environment.chatService
    }, SessionManagementService
  ]

})
export class InternshipsModule {
}
