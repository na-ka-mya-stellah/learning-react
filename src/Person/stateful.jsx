import { useState } from "react";

const UserName = ({ name, age }) => {
  return (
    <div>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

const Stateful = () => {
     const [Users, setUsers] = useState([
        {
            name : "jordan",
            age : 20
        },

        {
            name: 'kaye',
            age : 60
        }
     ])

     const changeIdentity = () => {
        setUsers([
            {
                name : 'james',
                age : 10
            },

            {
                name : 'cathy',
                age: 20
            }
        ]);
     } ;

     return (
        <div>
            <UserName name = {Users[0].name} age = {Users[0].age}/>
            <UserName name = {Users[1].name} age = {Users[1].age}/>
            <button onClick = {changeIdentity} >new identity</button>
        </div>
     )
    
}

export default Stateful;
