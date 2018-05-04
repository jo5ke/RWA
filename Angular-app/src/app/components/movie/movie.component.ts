import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  //mora dash da ima selector
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  public movie: Movie;

  public selected: boolean;

  constructor() { 
    this.selected = false;
  }

  ngOnInit() {
  }

  public selectMovie() {
    this.selected = true;
  }

}
