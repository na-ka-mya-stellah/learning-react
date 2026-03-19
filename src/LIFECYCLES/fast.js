import { Component } from "react";

class Hooks extends Component {
    state = {
        fruits:[
            {name:'mango',color:'yellow'},
            {name:'orange',color:'green'},
            {name:'kiwi', color:'purple'}
        ],

        displayfruits : true
    }

     deleteFruitHandler = (fruitsIndex) => {
    const fruits = [...this.state.fruits]; 
    fruits.splice(fruitsIndex, 1);
    this.setState({ fruits });
  };

}


export default fruits;