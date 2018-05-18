import {Action} from '@ngrx/store';
import { Movie } from '../models/movie';

export const UPDATE_MOVIE = "Update movie";
export const SELECT_MOVIE = "Select movie";

export class UpdateMovie implements Action {
    type = UPDATE_MOVIE;

    constructor(public movie : Movie) {

    }
}


export class SelectMovie implements Action {
    type = SELECT_MOVIE;

    constructor(public movie : Movie) {

    }
}