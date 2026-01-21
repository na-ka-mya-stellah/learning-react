
import React from 'react'
// example 2

// making our components configurable and flexible
// working with props


const Person = (props) => {
    return(
        <div>

        <p onClick = {props.click}>I'am {props.name} and i am {props.age} years </p>

    <p>{props.children}</p>

    <input type = 'text' onChange = {props.changed} value = {props.name}/>
    
    </div>
    )
}
export default Person;



