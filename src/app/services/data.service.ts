import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Music } from '../playlist/state/music.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data : Subject<Music>;

  constructor() { 

    this.data = new Subject();
  }

  //data from Music class (from Quebar)
  add(mdata:Music){

    this.data.next(mdata);
  }

  //(to playerbar)
  get(){
    return this.data;
  }
  
}
