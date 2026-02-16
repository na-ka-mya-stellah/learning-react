import { Component } from 'react';
import Person from '../Person/Person';
import '../App.css';
import styled from 'styled-components';

// Styled button
const StyledButton = styled.button`
  width: 25%;
  margin:  16px auto;
  border: 1px solid #eee;
  box-shadow: 0px 1px 3px #ccc;
  padding: 16px;
  cursor: pointer;
  color:black;
  

  @media (min-width: 500px) {
    width: 450px;
  }
`;

class Try extends Component {
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
    this.setState((prevState) => ({
      showPersons: !prevState.showPersons,
    }));
  };

  nameChangedHandler = (event) => {
    this.setState((prevState) => ({
      persons: prevState.persons.map((person, index) =>
        index === 1 ? { ...person, name: event.target.value } : person
      ),
    }));
  };

  render() {
    let persons = null;
    const classes = [];

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => (
            <Person
              key={index}
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              changed={this.nameChangedHandler}
            />
          ))}
        </div>
      );

      if (this.state.persons.length <= 2) {
        classes.push('red');
      }

      if (this.state.persons.length <= 1) {
        classes.push('bold');
      }
      
      
    }

    return (
      <div>
        <StyledButton onClick={this.togglePersonHandler}>
          classname styling button
        </StyledButton>

        <h2 className={classes.join(' ')}>its really working</h2>

        {persons}
      </div>
    );
  }
}

export default Try;
