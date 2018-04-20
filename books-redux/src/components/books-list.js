import React, {Component} from "react";
import {connect} from 'react-redux';
import { bindActionCreators  } from 'redux';
import { selectBook,deleteBook } from "../store/actions";

class BookList extends Component {
    render() {
        return (
            <ul>
                {this.renderList()}
            </ul>
        )
    }

    renderList() {
        if(!this.props.books){
            return <li>Loading..</li>
        }
        return this.props.books.map(book => {
            return (
                <li key={book.title} >
                <span onClick={() => this.props.select(book)}>{book.title}</span>
                <button onClick={() => this.props.brisi(book)}>X</button></li>
            )
        })
    }
}

// state je AppState (Redux)
function mapStateToProps(state) {
    return {
        books: state.books
    }
}

function MapDispatchToProps(dispatch){
    return bindActionCreators({
     //props  :  action   
        select:selectBook,
        brisi:deleteBook,
    },dispatch)
}

export default connect(mapStateToProps, MapDispatchToProps)(BookList);
// export default BookList;