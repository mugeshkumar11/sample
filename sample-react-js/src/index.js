import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const element = React.createElement("h1", {}, "hello world!");
console.log("element",element);


const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(element);


  //multible element

const element2 = React.createElement(
  "div", 
  {}, 
  React.createElement("h1", {},"hello good morning!"),
  React.createElement("h2", {},"hello good afternoon!"),
  React.createElement("h3", {},"hello good evening!"),
  React.createElement("h4", {},"hello good night!")
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));

  root1.render(element2);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

