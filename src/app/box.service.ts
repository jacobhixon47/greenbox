import { Injectable } from '@angular/core';
import { Box } from './box.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class BoxService {
  boxes: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.boxes = angularFire.database.list('boxes');
  }

  getBoxes(){
    return this.boxes;
  }

  getBoxById(boxId: string) {
    return this.angularFire.database.object('/boxes/' + boxId);
  }
}
