import React, {Component} from 'react';
import Button from './button';

class ButtonsList extends Component{
    constructor() {
        super();
        this.state = {
            selected: 0,
            buttons: ["one","two","three"]
        }
    }
    onButtonClicked(idx) {
        console.log(`Clicked on ${idx}`);
        this.setState({
            selected: idx
        })
    }

    render() {
        return(
            <div>
                {this.state.buttons.map((title, index) => {
                    return(
                        <Button 
                            key={index}
                            naslov={title}
                            highlighted={this.state.selected === index}
                            clicked={() => this.onButtonClicked(index)}
                        ></Button>
                    )
                })}
            </div>
        )
    }
}

export default ButtonsList;