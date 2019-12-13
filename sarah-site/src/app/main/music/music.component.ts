import { Component, OnInit } from '@angular/core';
import * as musicJson from './music.json';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['../../app.component.css']
})
export class MusicComponent implements OnInit {

  constructor() { }

  musicList = musicJson.albums;


  ngOnInit() {
    console.log(this.musicList);
  }

}
