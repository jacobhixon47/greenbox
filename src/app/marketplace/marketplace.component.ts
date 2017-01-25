import { Component, OnInit } from '@angular/core';
import { Box } from '../box.model';
import { Router } from '@angular/router';
import { BoxService } from '../box.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [BoxService, AuthService]
})
export class MarketplaceComponent implements OnInit {
  boxes: FirebaseListObservable<any[]>;
  auth;
  
  constructor(private router: Router, private boxService: BoxService, private authService: AuthService, public af: AngularFire){}

  ngOnInit() {
    this.boxes = this.boxService.getBoxes();
    this.auth = this.authService.getAuth();
  }

  goToBox(clickedBox) {
    this.router.navigate(['boxes', clickedBox.$key]);
  };
}
