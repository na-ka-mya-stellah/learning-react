
// example 1
import Read from "./components/Read"; // import the file, React will get the function
import Count from "./components/Count";
import {desiredGames} from "./components/Doubled"
import {data} from "./components/Doubled"
import Person from  './Person/Person'
import Content from  './Person/Dynamiccontent'

function App() {
  return (
    <div>
      <Read />
      <Count/> 
      {desiredGames}
      {data} 

      {/* making a component configurable,flexible and dynamic  */}

      <Person name ='jordan' age = '20' />
      <Person name = 'manzi' age = '22'/>
      <Person name = 'blair' age = '24'> My Most loved game is basketball</Person>
      <Content/>
    
    </div>
  );
}

export default App;