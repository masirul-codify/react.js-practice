

import React from 'react';
import Card from './components/Card';
import List from './components/unique-list/List';
import Users from './components/unique-list/User';
import Data from './Data.json'; 
import Card2 from './components/Card2';
import BsCard from './components/reactBootstrap/BsCard';
import Navbar from './components/reactBootstrap/Navbar';
import States from './components/State';
import ConditionalRenderings from './components/conditionalRendering/Render';

import { FaFacebook,FaYoutube  } from "react-icons/fa6";
import ReactBootstrap from './components/reactBootstrap/ReactBootstrap';



function App(){
    return <div> 
        {/* <Users />
        <Card2 name="This is card2 name class component example"/>
        <div>
            <span><FaYoutube className='icon'/></span>
            <span><FaFacebook className='icon'/></span>
            
        </div>
        <ReactBootstrap /> */}
        <Navbar />
        <div className='d-flex align-items-center'> 
           <BsCard />
           <BsCard />
           <BsCard />
           <BsCard />
        </div> 
        <States />
        <ConditionalRenderings /> 
    </div>
}

export default App;
// function App() {  
//     return <div> 
//         <h1 className='headingStyle'> Blog App  </h1>
//         <div className='container'>
//             <div className='row'>
//                 <div className='card-wrapper'>
//                   { Data.map ( (item, index) => <Card key={index} blogTitle=  {item.blogTitle}  blogDesc= {item.blogDesc}/> )}
//                 </div>
//             </div>
//         </div>
//     </div>
// }

// export default App;

