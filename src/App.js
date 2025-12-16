
// example 1
import Read from "./components/Read"; // import the file, React will get the function
import Count from "./components/Count";


function App() {
  return (
    <div>
      <Read />
      <Count/>   {/* Use it like a JSX component */}
    </div>
  );
}

export default App;