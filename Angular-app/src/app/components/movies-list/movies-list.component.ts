import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
  
  public movies: Movie[];

  public selectedMovie: Movie ;

  constructor(moviesService: MoviesService) {
    this.movies = moviesService.getAll();
   }

  ngOnInit() {
    this.selectedMovie = this.movies[0];
  }

  onSelected(movie: Movie){
    this.selectedMovie = movie;
    // movie.selected = true;
  }

}
