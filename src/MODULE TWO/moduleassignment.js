
import { Component } from "react";
import Validation from '../validation/validation'
import Char from '../char/char';

class Solution extends Component {
    state = {
        Userinput: ''
    }

     inputChangedHandler = (event) => {
        this.setState({ Userinput: event.target.value })
    }

    render() {
        const charList = this.state.Userinput.split('').map(ch =>{
            return <char character = {ch} />
        })
        return (
            <div>
            <input
                type="text"
                onChange={this.inputChangedHandler}
                value={this.state.Userinput}/>
                <p>{this.state.Userinput}</p>
                <Validation inputLength= {this.state.Userinput.length}/>
                {charList}
            </div>
        )
    }
}

export default Solution;
