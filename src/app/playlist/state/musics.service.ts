import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { HttpClient } from '@angular/common/http';
import { MusicsStore } from './musics.store';
import { Music } from './music.model';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MusicsService {

  constructor(private musicsStore: MusicsStore,
              private http: HttpClient) {
  }

  get() {
    return this.http.get<Music[]>('https://api.com').pipe(tap(entities => {
      this.musicsStore.set(entities);
    }));
  }

  add(music: Music) {
    this.musicsStore.add(music);
  }

  update(id, music: Partial<Music>) {
    this.musicsStore.update(id, music);
  }

  remove(id: ID) {
    this.musicsStore.remove(id);
  }

}
