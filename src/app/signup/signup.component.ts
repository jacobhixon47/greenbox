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
    password: [""],
    confirmPassword: [""]
  });
  constructor(private router: Router, public fb: FormBuilder, public af: AngularFire) {}
  signup() {
    if (this.signupForm.value.password === this.signupForm.value.confirmPassword) {
      this.af.auth.createUser(this.signupForm.value).catch(function(error) {
        alert(error.message);
      });
      this.router.navigate(['store']);
    } else {
      alert('Passwords do not match. Please try again.');
    }
  }
}
