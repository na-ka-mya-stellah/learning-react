import React, { Component } from 'react';
import Person from '../Person/Person';
import styled from 'styled-components';

// Styled button using styled-components
const StyledButton = styled.button`
  font: inherit;
  border: 1px solid blue;
  padding: 10px 20px;
  cursor: pointer;
  color: violet;
  background-color: ${props => props.alt ? 'olive' : 'black' };

  &:hover {
    background-color: ${props => props.alt ? 'salmon': 'blue'};
    color: black;
  }
`;

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
        <StyledButton
         alt = {this.state.showPersons}
          show={this.state.showPersons}
          onClick={this.togglePersonHandler}
        >
          changed and styled button
        </StyledButton>
        {persons}
      </div>
    );
  }
}

export default Bounce; 