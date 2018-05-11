import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../../models/movie';
// import { EventEmitter } from 'events';

@Component({
  //mora dash da ima selector
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  @Input()
  public movie: Movie;
  
  @Input()
  public selected: boolean;  

  @Input()

  @Output()
  public selectedEvent: EventEmitter<Movie> = new EventEmitter();

  // public selected: boolean;

  constructor() { 
    this.selected = false;
  }

  ngOnInit() {
  }

  public selectMovie() {
    this.selected = true;
    this.selectedEvent.emit(this.movie);
  }

}
