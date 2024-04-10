

import React from 'react';
import Card from './components/Card';
import Data from './Data.json'; 

function App() {  
    return <div> 
        <h1 className='headingStyle'> Blog App  </h1>
        <div className='container'>
            <div className='row'>
                <div className='card-wrapper'>
                  { Data.map ( (item, index) => <Card key={index} blogTitle=  {item.blogTitle}  blogDesc= {item.blogDesc}/> )}
                </div>
            </div>
        </div>
    </div>
}

export default App;

