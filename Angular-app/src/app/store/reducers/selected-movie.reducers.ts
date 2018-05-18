import {Action} from '@ngrx/store';
import { Movie } from '../../models/movie';
import { SELECT_MOVIE,SelectMovie } from '../actions';


export default function (state:Movie=null,action:Action) : Movie{
    switch(action.type) {
        case SELECT_MOVIE: {
                return (action as SelectMovie).movie;
        }
        default:
            return state;
    }
}