import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'; 

import { AppComponent } from './app.component';
import { MovieComponent } from './components/movie/movie.component';
import { MoviesListComponent } from './components/movies-list/movies-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { rootReducer } from './store';

@NgModule({
  declarations: [
    AppComponent,
    MovieComponent,
    MoviesListComponent,
    MovieDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // StoreModule.forRoot(rootReducer)
    StoreModule.forRoot(rootReducer),
    StoreDevtoolsModule
  ],
  providers: [],
  // providers: [
  //   MoviesService
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
