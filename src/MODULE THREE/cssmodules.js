// 
import styles from './button.module.css'
import React, { Component } from 'react';
import Person from '../Person/Person';

class Bounce extends Component {
  state = {
    persons: [
      { id: 1, name: 'jordan', age: 20 },
      { id: 2, name: 'manzi', age: 22 },
      { id: 3, name: 'blair', age: 24 },
    ],
    showPersons: true,
  };

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  };

  togglePersonHandler = () => {
    this.setState((prevState) => ({
      showPersons: !prevState.showPersons,
    }));
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
              key={person.id}
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
        <button className ={styles.button}  onClick={this.togglePersonHandler}>
          convert Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default Bounce;