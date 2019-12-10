import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // @HostListener("window:scroll", [])
  // onWindowScroll() {

  //   const number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
  //   if (number <= 20) {
  //     document.getElementById("header").style.padding = "50px";
  //   } else if (number > 20) {
  //     var pix = (50-(number-20));
  //     if(pix>15){
  //       document.getElementById("header").style.padding = pix+"px";
  //     } 
  //   } 

  // }
}
