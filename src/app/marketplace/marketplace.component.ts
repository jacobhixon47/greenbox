import { Component, OnInit } from '@angular/core';
import { Box } from '../box.model';
import { Router } from '@angular/router';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {

  constructor(private router: Router){}

  boxes: FirebaseListObservable<any[]>;

  goToBox(box: Box) {
    this.router.navigate(['boxes', box.id]);
  };
}
