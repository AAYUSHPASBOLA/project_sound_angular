import { Injectable } from '@angular/core';
import { Music } from './music.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

export interface MusicsState extends EntityState<Music> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'musics' })
export class MusicsStore extends EntityStore<MusicsState> {

  constructor() {
    super();
  }

}

