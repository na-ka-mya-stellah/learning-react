

const Puppy = (props) => {
   
    return(
        <div className >

        <p onClick = {props.click}>I'am {props.name} and i am {props.age} years </p>

    <p>{props.children}</p>

    <input type = 'text' onChange = {props.changed} value = {props.name}/>
    
    </div>
    )
}
export default Puppy;

