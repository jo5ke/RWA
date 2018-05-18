import {Action} from '@ngrx/store';
import { Movie } from '../../models/movie';
import { UPDATE_MOVIE,UpdateMovie } from '../actions';

const initalState: Movie[] = [
    {
    id: 1,
    title:"King Arthur",
    year:2017,
    rating:3.5,
    awards:[]
    },
    {
    id: 2,        
    title:"Snatch",
    year:2002,
    rating:4.5,
    awards:[]
    },
    {
    id: 3,        
    title:"Inception",
    year:2012,
    rating:5,
    awards:[]
    }
];
export default function (state:Movie[]=initalState, action: Action): Movie[] {
        switch(action.type) {
            case UPDATE_MOVIE: {
                // const movie = (action as UpdateMovie).movie;
                const {movie} = action as UpdateMovie;
                return state.map(mov => 
                    (mov.id === movie.id) 
                     ? movie:mov);
            }
        
            default:
                return state;
        }
}