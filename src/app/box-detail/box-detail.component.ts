import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Box } from '../box.model';
import { FirebaseObjectObservable } from 'angularfire2';
import { BoxService } from '../box.service';


@Component({
  selector: 'app-box-detail',
  templateUrl: './box-detail.component.html',
  styleUrls: ['./box-detail.component.css'],
  providers: [BoxService]
})

export class BoxDetailComponent implements OnInit {
  boxId: string;
  boxToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private boxService: BoxService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.boxId = urlParameters['id'];
    });
    this.boxToDisplay = this.boxService.getBoxById(this.boxId);
  }
}
