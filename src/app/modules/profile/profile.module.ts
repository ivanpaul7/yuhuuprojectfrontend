import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,
  MatOption, MatSelectModule
} from '@angular/material';
import { StudentProfileEditComponentComponent } from './components/student-profile-edit-component/student-profile-edit-component.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

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
    ReactiveFormsModule,
  ],
  declarations: [
    StudentProfileEditComponentComponent
  ],
  entryComponents: [
    StudentProfileEditComponentComponent
  ],

})
export class ProfileModule { }
