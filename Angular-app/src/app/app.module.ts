import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  // providers: [
  //   MoviesService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
