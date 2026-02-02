import { Component } from 'react';
import Person from './helper.js';
class state extends Component {
  state = {
    persons: [
      {id : 'can', name : 'jordan', age: 20 },
      {id : 'buzz', name: 'manzi', age: 22 },
      {id : 'boom', name: 'blair', age: 24 },
    ],
    showPersons: true,
  };

  // delete one person (immutably) based on its index in the array
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; // create a copy, don't mutate state directly
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

 nameChangedHandler = (event,id) => { 
    const personIndex = this.state.persons.findIndex(p => {
        return p.id === id;
    })

    const person = {
        ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
     

    this.setState({persons : persons})
      
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
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              click={() => this.deletePersonHandler(index)}
              key = {person.id}
              name={person.name}
              age={person.age}
              changed={(event) =>this.nameChangedHandler(event,person.id)}
            >
              {/* Example child text (optional) */}
            </Person>
          ))}
        </div>
      );
    }
    return (
      <div>
        <button style={style} onClick={this.togglePersonHandler}>
          flexible
        </button>

        {persons}
      </div>
    );
  }
}

export default state;