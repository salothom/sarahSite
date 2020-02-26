import { Component, OnInit, Input } from '@angular/core';
import * as musicJson from './music.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../app.component.css']
})
export class HomeComponent implements OnInit {

  // @Input() button: Button;

  constructor() { }
  mainShow = "About";
  showContent: boolean = true;//"1950s": "113",  removing this for now?
  musicList = musicJson.albums;
  filteredMusicList = musicJson.albums;
  filterBy = [];
  totalScored: number;

  ngOnInit() {
    this.countReviewed();
  }

  countReviewed(){
    this.totalScored = this.musicList.filter(function(value) { return value.score }).length;
  }

  keySearch(event: any) {

    // console.log(this.musicList);
    let keyLength = event.target.value.length;
    let wordSearch = event.target.value.toLowerCase()

    this.filteredMusicList = this.musicList.filter(d =>
      d.genre.substring(0, keyLength).toLowerCase() === wordSearch ||

      // d.secondaryGenre.substring(0, keyLength).toLowerCase() === wordSearch || 
      // can't do this right now becuase it isn't on every object?
      d.band.substring(0, keyLength).toLowerCase() === wordSearch ||
      d.album.substring(0, keyLength).toLowerCase() === wordSearch);

  }

  updateView(view){
    this.mainShow = view;
    console.log(view);
  }

}
