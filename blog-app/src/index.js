import React from 'react';
import ReactDOM from 'react-dom/client';  

const todoTitle = " Blog App With React  ";
const todoDesc = " To check your version of Node. js, open Terminal (or another CLI of your choice), and type the command node -v . Press Enter. The returning line will display the Node.Jan 10, 2023 ";
const date = new Date();
const currentDay = date.getDay();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <div>
    <h1 className='headingStyle'> {todoTitle} </h1> 
    <h4> {todoDesc} </h4>
    <p> {currentDay + "/" + currentMonth + "/" + currentYear} </p>
  </div>

);
 
