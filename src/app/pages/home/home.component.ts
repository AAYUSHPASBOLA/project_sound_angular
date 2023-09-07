import{CloudDataService }from './../../services/cloud-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MusicsStore } from 'src/app/playlist/state/musics.store';
import { createMusic } from 'src/app/playlist/state/music.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit 
{
  songsData:Observable<any>;

  constructor(private cloudData: CloudDataService, 
    private musicStore:MusicsStore){}

  ngOnInit(): void 
  {
    this.songsData = this.cloudData.getData();   //getData()from CloudDataService 
  }

  sendData(data)
  {
    console.log(data);
    this.musicStore.add(createMusic(data));//createMusic from musicmodel.ts
  }

}
