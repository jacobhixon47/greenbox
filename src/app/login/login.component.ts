import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm = this.fb.group({
    email: [""],
    password: [""]
  });
  constructor(private router: Router, public fb: FormBuilder, public af: AngularFire) {}
  login() {
    this.af.auth.login(this.loginForm.value).catch(function(error) {
      alert(error.message);
    });
  }
  loginGoogle() {
    this.af.auth.login();
  }
}
