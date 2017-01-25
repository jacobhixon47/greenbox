import { Component } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, public af: AngularFire) {
    this.af.auth.subscribe(auth => console.log(auth));
  }

  login() {
    this.af.auth.login();
  }

  logout() {
    this.af.auth.logout();
    this.router.navigate(['']);
  }
}
