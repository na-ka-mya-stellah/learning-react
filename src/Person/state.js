import React, {useState} from 'react'
import Person from './Person'


const MyApp = (props) => {
    const [personsState, setPersonsState] = useState({
         persons: [
      { name: "jordan", age: 20 },
      { name: "manzi", age: 22 },
      { name: "blair", age: 24 }
    ]
    })

    const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "jordan Ayu", age: 20 },
        { name: "manzi felix", age: 22 },
        { name: "blair rwahigi", age: 24 }
      ]
    });
  };

    return (
           <div className="hookexample">
        <button onClick={switchNameHandler}>
          switch name
        </button>

        <Person
          name={personsState.persons[0].name}
          age={personsState.persons[0].age}
        />
        <Person
          name={personsState.persons[1].name}
          age={personsState.persons[1].age}
        />
        <Person
          name={personsState.persons[2].name}
          age={personsState.persons[2].age}
        >
          My Most loved game is basketball
        </Person>
      </div> 
        
    )
}

export default MyApp;
