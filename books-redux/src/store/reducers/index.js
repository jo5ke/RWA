import {combineReducers} from 'redux';
import BooksReducers from './books.reducer';
import ActiveBookReducer from './active-book.reducer';

const rootReducer = combineReducers({
    books: BooksReducers,
    activeBook: ActiveBookReducer
})

export default rootReducer;