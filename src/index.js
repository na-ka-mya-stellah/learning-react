import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MyApp from './Person/state';
import reportWebVitals from './reportWebVitals';
import StatelessComponent from './Person/stateless';
import Stateful from  './Person/stateful';
import App from './App'
import Assignment from './UserInput/Assignment';
import Job from './MODULE TWO/Conditionally';
import Way from './MODULE TWO/javascript';
import Output from './MODULE TWO/lists';
import Delete from './MODULE TWO/immutable';
import Key from './MODULE TWO/keys'
import Flexible from './MODULE TWO/flexible';
import Solution from './MODULE TWO/moduleassignment';
import Char from './char/char';
import Dynamic from './MODULE THREE/styling';
import Try from './MODULE THREE/classnamestyling'
import Bounce from './MODULE THREE/styledanddynamic';
import Button from './MODULE THREE/cssmodules';
// import StyledDiv from './MODULE THREE/styledcomponents'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyApp />
    <StatelessComponent/>
    <Stateful/>
    <Assignment/>
    <App/>
    <Job/>
    <Way/>
    <Output/>
    <Delete/>
    <Key/>
    <Flexible/>
    <Solution/>
    <Char/>
    <Dynamic/>
    <Try/>
    <Bounce/>
    <Button/>
    {/* <StyledDiv/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
