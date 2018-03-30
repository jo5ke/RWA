import React, {Component} from 'react';

class MyButton extends Component {

    render() {
        return (
            <button
                // className="highlighted"\
                className={this.props.highlighted ? "highlighted" : ""}
                onClick={this.props.clicked}
            >{this.props.naslov}</button>
        )
    }
}

export default MyButton;