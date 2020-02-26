import { Component, OnInit, HostListener } from '@angular/core';
// import * as musicJson from './music.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['../../app.component.css']
})

export class MusicComponent implements OnInit {

  constructor(private router: Router) { }
  // decadesList: { [key: string]: string } = { "1960s": "4", "1970s": "58", "1980s": "27", "1990s": "202", "2000s": "110", "2010s": "6" };
  // showContent: boolean = true;//"1950s": "113",  removing this for now?
  // musicList = musicJson.albums;
  // filteredMusicList = musicJson.albums;
  // filterBy = [];
  // totalScored: number;

  ngOnInit() {
    // this.countReviewed();
  }

  // countReviewed(){
  //   this.totalScored = this.musicList.filter(function(value) { return value.score }).length;
  // }

  // keySearch(event: any) {

  //   // console.log(this.musicList);
  //   let keyLength = event.target.value.length;
  //   let wordSearch = event.target.value.toLowerCase()

  //   this.filteredMusicList = this.musicList.filter(d =>
  //     d.genre.substring(0, keyLength).toLowerCase() === wordSearch ||

  //     // d.secondaryGenre.substring(0, keyLength).toLowerCase() === wordSearch || 
  //     // can't do this right now becuase it isn't on every object?
  //     d.band.substring(0, keyLength).toLowerCase() === wordSearch ||
  //     d.album.substring(0, keyLength).toLowerCase() === wordSearch);

  // }

  // filterDown() {

  // }

  // openMusicInfo() {
  //   if (this.showContent === true) {
  //     this.showContent = false;
  //   } else {
  //     this.showContent = true;
  //   }
  // }

  // navigateToDecade(decade) {
  //   // console.log(decade);
  //   document.getElementById(decade).scrollIntoView();
  // }

  // toggleSearch($event) {
  //   var displaySearch = document.getElementById("mobileSearch").style.display;
  //   if (displaySearch == "block"){
  //     document.getElementById("mobileSearch").style.display = "none";
  //   }
  //   else{
  //     document.getElementById("mobileSearch").style.display = "block";

  //   }
    
  // }

}
