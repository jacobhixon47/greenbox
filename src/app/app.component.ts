import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }
  auth = this.af.auth;

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
  }
}
