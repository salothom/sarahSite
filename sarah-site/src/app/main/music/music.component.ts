import { Component, OnInit, HostListener } from '@angular/core';
import * as musicJson from './music.json';
import { Router } from '@angular/router';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['../../app.component.css']
})
export class MusicComponent implements OnInit {

  constructor(private router: Router) { }
  decadesList: { [key: string]: string } = { "1950s": "113", "1960s": "4", "1970s": "58", "1980s": "27", "1990s": "202", "2000s": "110", "2010s": "6", "2020s": "" };
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
    console.log(decade);
    document.getElementById(decade).scrollIntoView();
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    // var rect = element.getBoundingClientRect();
// console.log(rect.top, rect.right, rect.bottom, rect.left);
    // document.elementFromPoint(x, y);
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
