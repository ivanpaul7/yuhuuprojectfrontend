import {Component, OnInit} from '@angular/core';
import {AbstractLoginService} from '../../services/login.service';
import {Router} from '@angular/router';
import {AlertService} from '../../../alert/services/alert.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrls: ['./login-component.component.scss']
})
export class LoginComponentComponent implements OnInit {
  loading = false;
  submitted = false;
  loginForm: FormGroup;

  public username = '';
  public password = '';

  private loginService: AbstractLoginService;

  constructor(loginService: AbstractLoginService,
              private router: Router,
              private alertService: AlertService,
              private formBuilder: FormBuilder) {
    this.loginService = loginService;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    //TODO
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

    this.loginService.login(this.f.username.value, this.f.password.value).subscribe((isValid: boolean) => {
      if (isValid) {
        this.router.navigateByUrl('/dashboard');
      } else {
        this.alertService.error('Login error', true);
        this.loading = false;
      }
    });

  }
}
