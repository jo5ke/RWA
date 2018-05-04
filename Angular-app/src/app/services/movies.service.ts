import { Injectable } from '@angular/core';
import { Movie } from "../models/movie";

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private movies: Movie[];

  constructor() { 
    this.movies = [];
    this.movies.push(
      {
        title:"King Arthur",
        year:2017,
        rating:3.5,
        awards:[]
      }
    )
    this.movies.push(
      {
        title:"Snatch",
        year:2002,
        rating:4.5,
        awards:[]
      }
    )
    this.movies.push(
      {
        title:"Inception",
        year:2012,
        rating:5,
        awards:[]
      }
    )
  }

  public getAll() {
    return this.movies;
  }
}
