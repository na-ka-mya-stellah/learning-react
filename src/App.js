
// example 1
import React, { Component } from "react";
import Read from "./components/Read";
import Count from "./components/Count";
import Person from "./Person/Person";
import Content from "./Person/Dynamiccontent";


class App extends Component {

  state = {
    persons: [
      { name: "jordan", age: 20 },
      { name: "manzi", age: 22 },
      { name: "blair", age: 24 }
    ]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: 'jordan ayu', age: 20 },
        { name: "manzi felix", age: 22 },
        { name: "blair rwahigi", age: 24 }
      ]
    });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'jordan ayu', age: 20 },
        { name: event.target.value, age: 22 },
        { name: "blair rwahigi", age: 24 }
      ]
    });
  }

  render() {
    return (
      <div>
        <Read />
        <Count />
        <button onClick={this.switchNameHandler}>
          switch name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click = {this.switchNameHandler.bind}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed = {this.nameChangedHandler} 
          
        />

        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My Most loved game is basketball
        </Person>

        <Content />
      </div>
    );
  }
}

export default App;