

import React from 'react';
import Card from './components/Card';


function App() {
    return <div> 
        <h1 className='headingStyle'> Blog App  </h1>
        <div className='container'>
            <div className='row'>
                <div className='card-wrapper'>
                    <Card blogTitle="Blog App With React" blogDesc=" To check your version of Node. js, open Terminal (or another CLI of your choice), and type the command node -v . Press Enter. The returning line will display the Node.Jan 10, 2023 " />
                    <Card blogTitle="Blog App With React" blogDesc=" To check your version of Node. js, open Terminal (or another CLI of your choice), and type the command node -v . Press Enter. The returning line will display the Node.Jan 10, 2023 " />
                    <Card blogTitle="Blog App With React" blogDesc=" To check your version of Node. js, open Terminal (or another CLI of your choice), and type the command node -v . Press Enter. The returning line will display the Node.Jan 10, 2023 " />
                </div>
            </div>
        </div>
    </div>
}

export default App;

