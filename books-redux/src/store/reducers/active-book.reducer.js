import { BOOK_SELECTED } from "../actions";

export default function(state = null, action) {
    switch(action.type){
        case BOOK_SELECTED:
            return action.payload; //stari state
    }
    return state;
}

// input starti state, output novi