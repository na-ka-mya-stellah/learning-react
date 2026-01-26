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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
