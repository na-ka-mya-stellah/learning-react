 import React from 'react'
//  import './Person.css';
 import styled from 'styled-components';
 
 const StyledDiv = styled.div`
       {
    width: 60%;
    margin:  auto;
    border: 1px solid #eee;
    box-shadow: 0px 1px 3px #ccc;
    padding: 16px;
    margin: 16px auto;
    color: black;
    
   
}`


 const Caution = (props) => {
    <div className = 'right'>
     return(
        <StyledDiv>
        <p onClick = {props.click}>I'am {props.name} and i am {props.age} years </p>
 
     <p>{props.children}</p>
 
     <input type = 'text' onChange = {props.changed} value = {props.name}/>
     
     </StyledDiv>
     )
     </div>
        }
        
 export default Caution;
 
 
