// 

import React, { Component } from 'react';
import Person from '../Person/Person';
class Bounce extends Component {
  state = {
    persons: [
      { name: 'jordan', age: 20 },
      { name: 'manzi', age: 22 },
      { name: 'blair', age: 24 },
    ],
    showPersons: true,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonHandler = () => {
    this.setState((prevState) => ({ showPersons: !prevState.showPersons }));
  };

  nameChangedHandler = (event, index) => {
    const persons = [...this.state.persons];
    persons[index].name = event.target.value;
    this.setState({ persons });
  };

  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={index}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={(event) => this.nameChangedHandler(event, index)}
            />
          ))}
        </div>
      );
    }

    return (
      <div>
        <Button
         alt = {this.state.showPersons}
          show={this.state.showPersons}
          onClick={this.togglePersonHandler}
        >
          changed and styled button
        </Button>
        {persons}
      </div>
    );
  }
}

export default Bounce;