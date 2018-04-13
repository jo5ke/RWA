import { BOOK_DELETED } from '../actions';

const initialState= [
    { title: "Game of Thrones", pages:500},
    { title: "Intro to Redux",pages:200},
    { title: "Harry Potter",pages: 300}
];

export default function(state=initialState, action) {
    switch(action.type){
        case BOOK_DELETED: {
            const title = action.payload;
            return state.filter(book => book.title !== title)
        }
    }
    return state;
}

// input starti state, output novi