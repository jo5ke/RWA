import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  @Input()
  public movie: Movie

  constructor() { }

  ngOnInit() {
  }

  decreaseRating(){
    if(this.movie.rating > 0)
      this.movie.rating--;
  }

  increaseRating(){
    if(this.movie.rating > 5)
      this.movie.rating++;
  }
  
  public getRating(){
    return this.movie.rating
  }

}
