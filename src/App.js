

import React from 'react';
import Card from './components/Card';


function App() {
    return <div> 
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
}

export default App;

