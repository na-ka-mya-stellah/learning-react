
import React from 'react'
// example 2

// making our components configurable and flexible
// working with props


const Person = (props) => {
    return(
        <div>

        <p>I'am {props.name} and i am {props.age} years </p>

    <p>{props.children}</p>
    
    </div>
    )
}
export default Person;



