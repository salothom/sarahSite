import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { MusicComponent } from './main/music/music.component';
import { BooksComponent } from './main/books/books.component';


const routes: Routes = [
  {path: "", component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'music', component: MusicComponent },
  { path: 'books', component: BooksComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }