import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MusicsStore, MusicsState } from './musics.store';

@Injectable({ providedIn: 'root' })
export class MusicsQuery extends QueryEntity<MusicsState> {

  constructor(protected store: MusicsStore) {
    super(store);
  }

}
