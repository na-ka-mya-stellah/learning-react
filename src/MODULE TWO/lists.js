import {Component} from 'react';
import Person from './helper.js'
class Output extends Component {
  state = {
   
    persons: [
      { name: "jordan", age: 20 },
      { name: "manzi", age: 22 },
      { name: "blair", age: 24 },
    ],
  };
  otherState = 'some other value'
  showPersons = true

  switchNameHandler = () => {
    this.setState({
      persons: [
        { name: "jordan ayu", age: 20 },
        { name: "manzi felix", age: 22 },
        { name: "blair rwahigi", age: 24 },
      ],
    });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons : !doesShow})
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "jordan ayu", age: 20 },
        { name: event.target.value, age: 22 },
        { name: "blair rwahigi", age: 24 },
      ],
    });
  };

  render() {

    // inline styling the button
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null; 

    // outputting lists
    if (this.state.showPersons){
        persons = ( 
             <div> 
                {this.state.persons.map( persons => {
                    return <persons 
                    name = {persons.name}
                     age = {persons.age}/>
                })}                           
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
        />

        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChangedHandler}
        />


        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        >
          My Most loved game is basketball
        </Person>
        </div>)
    }
    return (
      <div>
        <Person/>
        <button style={style} onClick={this.togglePersonHandler}>
          click name
        </button> 

        {persons}
        </div>
      
    );
  }
}

export default Output;