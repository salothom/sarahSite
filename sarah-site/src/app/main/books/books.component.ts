import { Component, OnInit } from '@angular/core';
import * as bookJson from './books.json';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['../../app.component.css']
})
export class BooksComponent implements OnInit {

  bookList = bookJson.books;

  showContent: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  openBookInfo(){

    if(this.showContent === true){
      this.showContent = false;
      
    }else{
      this.showContent = true;
    }


  }
}
