import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MoviesService } from './services/movies.service';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  // providers: [
  //   MoviesService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
