import {Component, OnDestroy, OnInit} from '@angular/core';
import {AbstractLoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../alert/services/alert.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {SessionManagementService} from '../../../../shared/utils/session-management.service';
import {Role} from '../../../../shared/model/Role';
import {applicantNavBarItems, companyNavBarItems} from '../../../../app.module';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit, OnDestroy {
  loading = false;
  submitted = false;
  loginForm: FormGroup;
  loginProcessFinishedSubscription: Subscription;

  public username = '';
  public password = '';

  private loginService: AbstractLoginService;

  constructor(loginService: AbstractLoginService,
              private router: Router,
              private alertService: AlertService,
              private formBuilder: FormBuilder,
              private sessionManagementService: SessionManagementService) {
    this.redirectToDashboard();
    this.loginService = loginService;
    this.loginProcessFinishedSubscription = this.loginService.loginProcessFinished.subscribe((isValid: boolean) => {
      this.loading = false;
      if (isValid) {
        this.redirectToDashboard();
      } else {
        this.alertService.error('Login error', true);
      }
    }, (error) => {
      console.log(error);
    });
  }

  redirectToDashboard() {
    if (this.sessionManagementService.isUserLoggedIn()) {
      if (this.sessionManagementService.getLoggedUserRole() === Role.RoleStringEnum.APPLICANT) {
        this.router.navigateByUrl('/dashboard/' + applicantNavBarItems[0].path);
      } else {
        this.router.navigateByUrl('/dashboard/' + companyNavBarItems[0].path);
      }
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    // TODO
    // reset login status
    // this.loginService.logout();
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;

    this.loginService.login(this.f.username.value, this.f.password.value).then().catch((error) => {
      this.loginService.loginProcessFinished.emit(false);
      console.log(error);
      this.loading = false;
      this.alertService.error('Login error', true);
    });
  }

  ngOnDestroy(): void {
    this.loginProcessFinishedSubscription.unsubscribe();
  }
}
