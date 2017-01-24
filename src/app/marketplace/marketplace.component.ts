import { Component, OnInit } from '@angular/core';
import { Box } from '../box.model';
import { Router } from '@angular/router';
import { BoxService } from '../box.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css'],
  providers: [BoxService]
})
export class MarketplaceComponent implements OnInit {
  boxes: FirebaseListObservable<any[]>;

  constructor(private router: Router, private boxService: BoxService){}

  ngOnInit() {
    this.boxes = this.boxService.getBoxes();
  }

  goToBox(box: Box) {
    this.router.navigate(['boxes', box.id]);
  };
}
