import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
// import { MoviesService } from '../../services/movies.service';
import { State } from '../../store';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SelectMovie } from '../../store/actions';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  movies$:Observable<Movie[]>;
  public movies: Movie[];

  public selectedMovie: Movie ;

  constructor(private store$ : Store<State>) {
    // this.movies = moviesService.getAll();
    // this.movies = [];
    store$.select(state => state.movies).subscribe(state => this.movies = state );
   }

  ngOnInit() {
    this.selectedMovie = this.movies[0];
  }

  onSelected(movie: Movie){
    // this.selectedMovie = movie;
    // movie.selected = true;
    console.log("Selected",movie);
    this.store$.dispatch(new SelectMovie(movie));
  }

}
