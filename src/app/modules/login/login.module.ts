import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponentComponent} from './components/login-component/login-component.component';
import {RegisterComponentComponent} from './components/register-component/register-component.component';
import {AbstractLoginService} from './services/login.service';
import {environment} from '../../../environments/environment';
import {AlertModule} from '../alert/alert.module';
import {RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';
import {AbstractRegisterService} from './services/register.service';
import { FormsModule } from '@angular/forms';
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
import {SessionManagementService} from '../../shared/utils/session-management.service';

@NgModule({
  imports: [
    AlertModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
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
  ],
  declarations: [LoginComponentComponent, RegisterComponentComponent],
  exports: [LoginComponentComponent, RegisterComponentComponent],
  providers: [
    {
      provide: AbstractLoginService,
      useClass: environment.loginService
    },
    {
      provide: AbstractRegisterService,
      useClass: environment.registerService
    },
    SessionManagementService
  ]
})
export class LoginModule {
}
