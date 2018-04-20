import { BOOK_SELECTED } from "../actions";
import { BOOK_DELETED } from "../actions";

export default function(state = null, action) {
    switch(action.type){
        case BOOK_SELECTED:
            return action.payload; //stari state
        case BOOK_DELETED:
            return state && action.payload === state.title ? null : state;
    }
    return state;
}

// input starti state, output novi