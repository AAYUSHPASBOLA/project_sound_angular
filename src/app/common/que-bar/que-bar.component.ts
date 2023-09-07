import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Music } from 'src/app/playlist/state/music.model';
import { MusicsQuery } from 'src/app/playlist/state/musics.query';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-que-bar',
  templateUrl: './que-bar.component.html',
  styleUrls: ['./que-bar.component.scss']
})
export class QueBarComponent implements OnInit {

  musicsDatas: Music[];

  constructor(
    private _data : DataService,
    private musicQuery : MusicsQuery) { }

  ngOnInit(): void {

    const datas = this.musicQuery.selectAll();//inbuilt function in musicQuery 
    datas.subscribe((res:Music[]) => {
      this.musicsDatas =res;
      console.log(res);
    });

  }

  sendData(music){

    this._data.add(music);//DataService method
    //console.log(music);
  }

}
