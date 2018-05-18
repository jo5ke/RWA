import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements  OnChanges {

  @Input()
  public movie: Movie

  constructor() { }
  rating: number;
  stars = new Array(5).fill(0);

  ngOnChanges() {
    this.rating = this.movie.rating;
  }

  decreaseRating(){
    if(this.movie.rating-1 > 0)
      this.movie.rating--;
      this.rating = this.movie.rating;
  }

  increaseRating(){
    if(this.movie.rating+1 < 5)
      this.movie.rating++;
      this.rating = this.movie.rating;
  }
  
  public getRating(){
    return this.movie.rating
  }

}
