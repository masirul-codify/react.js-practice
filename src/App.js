

import React from 'react';
import Card from './components/Card';
import Data from './Data.json'; 

function App() {
    let items = [];
    for (let x= 0; x<Data.length; x++) {
        items.push (<Card blogTitle=  {Data[x].blogTitle}  blogDesc= {Data[x].blogDesc}  /> )
    }
    return <div> 
        <h1 className='headingStyle'> Blog App  </h1>
        <div className='container'>
            <div className='row'>
                <div className='card-wrapper'>
                  {items} 
                </div>
            </div>
        </div>
    </div>
}

export default App;

