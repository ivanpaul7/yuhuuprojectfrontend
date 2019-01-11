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

@NgModule({
  imports: [
    AlertModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
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
  ]
})
export class LoginModule {
}
