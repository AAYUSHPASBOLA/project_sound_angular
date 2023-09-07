import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Music } from 'src/app/playlist/state/music.model';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-player-bar',
  templateUrl: './player-bar.component.html',
  styleUrls: ['./player-bar.component.scss']
})
export class PlayerBarComponent implements OnInit {

  duration : number = 100;
  currentTime : number = 0 ;
  isPlay: boolean= false;
  readCurrentTime: string = '00:00';
  readDuration:string = '00:00';
  volume:0.5;

  mydata = {
    img : '',
    label:'',
    author:'',
  }

  audio : any;
  //audio events
  audioEvents=[
    "ended",//when audio ends or is not playing
    "error",//audio error
    "play",//to play audio 
    "pause",//to pause
    "playing",//when audio is playing(single time)
    "timeupdate",//timeupdate check
    "canplay",//checks if audio format is supported or not / when audio is loaded completely
    "loadedmetadata",//buffering data
    "loadstart"//when data is fetched from server
  ];


  constructor(

    private _data : DataService

  ) { 

    this.audio = new Audio();//setting Audio object
  }


  ngOnInit(): void {
  
    //From Quebar to player bar
    //from DataService "ob" is object of music class
    this._data.get().subscribe(ob => {
      console.log(ob);

      this.mydata = ob;//info of the song wil be displayed by this

      //synchronous object
      this.playStream(ob).subscribe((ev:Event) =>{
  
      });

    });
  }

  playStream(ob : Music)//for checking audio stream 
  {
    
    return new Observable(observer =>{
      this.audio.src = ob.url; // getting audio source via url
      this.audio.load();//loading the audio

      //getting data via a event
      const handle=(event: Event)=>{

        console.log(event.type,this.audio.currentTime);

        this.currentTime = this.audio.currentTime;//current time of the song
        this.readCurrentTime = this.formatTime(this.currentTime);//in proper format (currentTime)

        this.duration = this.audio.duration;//total duration of the song
        this.readDuration = this.formatTime(this.duration);//in proper format (readDuration)

        observer.next(event);
      };

      this.addEvents(this.audio, handle);

    });
  }

  addEvents(audioObj , handler)
  {
    this.audioEvents.forEach(event => {
      audioObj.addEventListener(event, handler)
    });
  }

  formatTime(time, format="mm:ss")
  {
    const momentTime = time *1000;
    console.log(momentTime);

    
    return moment.utc(momentTime).format(format);
    //Coordinated Universal Time HH:mm:ss

    //return '';
    //using string format so that "this.readCurrentTime = this.formatTime(this.currentTime);" wont get error
  }

  setSeek(value){
    this.audio.currentTime = value;
    console.log(value);
  }

  isStart(){
    return false;
  }

  isEnd(){
    return false;
  }

 play(){
  this.audio.play();
  this.isPlay = true;
 }

 pause(){
  this.audio.pause();
  this.isPlay=false;
 }

  stop()
  {
    this.audio.pause();
    this.audio.currentTime = 0;
    console.log("STOPPPED!!!"); 
  }

  next()
  {

  }

  previous()
  {

  }

  setVolume(ev1){
    this.audio.volume = ev1.target.value;
    console.log(ev1.target.value);
  }

}