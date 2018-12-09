import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertService } from '../../../alert/services/alert.service';
import {AbstractRegisterService} from '../../services/register.service';
import {AbstractLoginService} from '../../services/login.service';

@Component({
  selector: 'app-register-component',
  templateUrl: './register-component.component.html',
  styleUrls: ['./register-component.component.scss']
})
export class RegisterComponentComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  private registerService: AbstractRegisterService;

  constructor( registerService: AbstractRegisterService,
               private router: Router,
               private alertService: AlertService,
               private formBuilder: FormBuilder  ) {
    this.registerService = registerService;
  }
//username: String, password: String, email: String, firstName: String, lastNameString, age: number
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      age: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.registerService.register(this.f.username.value,this.f.password.value,this.f.email.value,this.f.firstName.value,this.f.lastName.value,this.f.age.value).subscribe((isValid: boolean) => {
      if (isValid) {
        this.router.navigateByUrl('/login');
      } else {
        this.alertService.error("Register error", true);
        this.loading = false;
      }
    });

  }

}
