import { Injectable } from '@angular/core';
import { Box } from './box.model';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class BoxService {
  boxes: FirebaseListObservable<any[]>;
  constructor(private angularFire: AngularFire) {
    this.boxes = angularFire.database.list('boxes');
  }

  getAlbums(){
    return this.albums;
  }

}
