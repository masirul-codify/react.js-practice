

import React from 'react';
import Card from './components/Card';
import List from './components/unique-list/List';
import Users from './components/unique-list/User';
import Data from './Data.json'; 
import Card2 from './components/Card2';




function App(){
    return <div> 
        <Users />
        <Card2 name="This is card2 name class component example"/>
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

