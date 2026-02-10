import { Component } from 'react';
import Person from '../Person/Person';
import '../App.css';
class Try extends Component {
  state = {
    persons: [
      { name : 'jordan', age: 20 },
      { name: 'manzi', age: 22 },
      { name: 'blair', age: 24 },
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

  nameChangedHandler = (event) => {
    this.setState((prevState) => ({
      persons: prevState.persons.map((person, index) =>
        index === 1 ? { ...person, name: event.target.value } : person
      ),
    }));
  };

  render() {

    // inline styling the button
    const style = {
      backgroundColor: "black",
      font: "inherit",
      border: "1px solid blue",
      padding: "20px",
      cursor: "pointer",
      alignItems : 'center',
      color: 'white'
    };

    let persons = null;
    const classes = [];

    // outputting lists
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={this.nameChangedHandler}
            >
              {/* Example child text (optional) */}
            </Person>
          ))}
        </div>
      );

    //   styling classNames dynamically
      
      if (this.state.persons.length <=2){
        classes.push('red')
      }

      if (this.state.persons.length <=1){
        classes.push('bold')
      }
    }
    return (
      <div className = 'App'>
        <button style={style} onClick={this.togglePersonHandler}>
          classname styling button
        </button>
        <h2 className = {classes.join(' ')}>its really working</h2>
        {persons}
      </div>
    );
  }
}

export default Try;