import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public signupForm = this.fb.group({
    email: [""],
    password: [""]
  });
  constructor(private router: Router, public fb: FormBuilder, public af: AngularFire) {}
  signup() {
    this.af.auth.createUser(this.signupForm.value).catch(function(error) {
      alert(error.message);
    });
    this.router.navigate(['store'])
  }
}
