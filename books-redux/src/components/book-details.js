import React, {Component} from "react";
import {connect} from 'react-redux';
import { bindActionCreators  } from 'redux';

class BookDetails extends Component {
    render() {
        if(!this.props.book){
            return <div>Select a book</div>
        }
        return (
            <div>
                <h3>{this.props.book.title}</h3>
                <div>{this.props.book.pages}</div>
            </div>
        )
    }
}

// state je AppState (Redux)
function mapStateToProps(state) {
    return {
        // reduxov activeBook reducer mapira na this.props.book
        book: state.activeBook
    }
}


export default connect(mapStateToProps)(BookDetails);
// export default BookList;