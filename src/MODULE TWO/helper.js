
const Person = (props) => {
    return(
        <div className = 'Person'>

        <p onClick = {props.click}>I'am {props.name} and i am {props.age} years </p>

    <p>{props.children}</p>

    <input type = 'text' onChange = {props.changed} value = {props.name}/>
    
    </div>
    )
}
export default Person;
