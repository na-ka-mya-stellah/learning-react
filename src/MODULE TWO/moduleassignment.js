
// import React, { Component } from 'react';
import Validation from '../validation/validation';
import Char from '../char/char';
import { Component } from 'react';


class Solution extends Component {
    state = {
        Userinput: '',
    };

    deleteCharHandler = (index) => {
        const text = this.state.Userinput.split('');
        text.splice(index, 1);
        const updatedText = text.join('');
        this.setState({ Userinput: updatedText });
    };

    inputChangedHandler = (event) => {
        this.setState({ Userinput: event.target.value });
    };

    render() {
        const charList = this.state.Userinput.split('').map((ch, index) => {
            return (
                <Char
                    character={ch}
                    clicked={() => this.deleteCharHandler(index)}
                    key={index}
                />
            );
        });
        return (
            <div>
                <input
                    type="text"
                    onChange={this.inputChangedHandler}
                    value={this.state.Userinput}
                />
                <p>{this.state.Userinput}</p>
                <Validation inputLength={this.state.Userinput.length} />
                {charList}
            </div>
    
        );
    }
}

export default Solution;
