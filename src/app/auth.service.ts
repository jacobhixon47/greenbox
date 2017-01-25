import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(private router: Router, private angularFire: AngularFire) {
  }
  auth = this.angularFire.auth;

  getAuth() {
    return this.auth;
  }
}
