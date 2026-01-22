import React, { Component } from "react";
// added file extensions for compilation
import Userinput from "./Userinput.js";
import Useroutput from "../UserOutput/Useroutput.js";

class assignment extends Component {
    state = {
        username : 'superman'
    }
 InputChangedHandler = (event) => {
    this.setState ({
        username : event.target.value
    })
}

    render(){
    return(

       <div>
        <Userinput  updated = {this.InputChangedHandler}/>
        <Userinput updated = {this.InputChangedHandler}/>
        <Useroutput userName = {this.state.username}/>
        <Useroutput userName = {this.state.username} />
       </div>

    )
}


}



export default assignment;