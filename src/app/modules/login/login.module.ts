import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponentComponent} from './components/login-component/login-component.component';
import {RegisterComponentComponent} from './components/register-component/register-component.component';
import {AbstractLoginService} from './services/login.service';
import {environment} from '../../../environments/environment';
import {AlertModule} from '../alert/alert.module'
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import {RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import {AbstractRegisterService} from './services/register.service';

@NgModule({
  imports: [
    AlertModule,
    CommonModule,
    RouterModule,
    ReactiveFormsModule
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
    }
  ]
})
export class LoginModule {
}
