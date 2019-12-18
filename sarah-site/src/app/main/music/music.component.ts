import { Component, OnInit, HostListener } from '@angular/core';
import * as musicJson from './music.json';
import {Router} from '@angular/router';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['../../app.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private router: Router) { }
  decadesList = ["1950s","1960s", "1970s", "1980s", "1990s","2000s","2010s","2020s"];
  showContent: boolean = false;
  musicList = musicJson.albums;


  ngOnInit() {
    // console.log(this.musicList);
  }

  openMusicInfo() {
    if (this.showContent === true) {
      this.showContent = false;
    } else {
      this.showContent = true;
    }
  }

  navigateToDecade(decade) {
    this.router.navigateByUrl('/music#'+decade);
 }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    // console.log(number);
    if (number >= 177) {
      document.getElementById("bookFilter").style.position = "fixed";
      document.getElementById("bookFilter").style.top = "170px";
      // document.getElementById("bookFilter").style.width = "230px";

    } else {
      document.getElementById("bookFilter").style.position = "absolute";
      document.getElementById("bookFilter").style.top = "";

      // document.getElementById("bookFilter").style.width = "230px";

    }

  }
}
