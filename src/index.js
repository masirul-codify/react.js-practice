import React from 'react';
import ReactDOM from 'react-dom/client';  
import Card from './Card';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <div>
    <h1 className='headingStyle'> Blog App  </h1> 
    <div className='container'>
      <div className='row'>
        <div className='card-wrapper'>
          <Card />
          <Card />
          <Card />
      </div> 
    </div> 
  </div>
  </div>

);
 
