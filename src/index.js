import React from 'react';
import ReactDOM from 'react-dom/client';  

const blogTitle = " Blog App With React  ";
const blogDesc = " To check your version of Node. js, open Terminal (or another CLI of your choice), and type the command node -v . Press Enter. The returning line will display the Node.Jan 10, 2023 ";
const date = new Date();
const currentDay = date.getDay();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const themeBtn = "Read More";
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <div>
    <h1 className='headingStyle'> Blog App  </h1> 
    <div className='container'>
      <div className='row'>
        <div className='card-wrapper'>
          <div className='card'>
            <h1 className='card-title'> {blogTitle} </h1>
            <h4 className='card-desc'> {blogDesc} </h4>
            <h6 className='card-footer'> {currentDay + "/" + currentMonth + "/" + currentYear} </h6>
            <div className='btn-wrapper'>
              <a href='#' className='theme-btn'>{themeBtn}</a>
            </div>
          </div> {/*./card */}
          <div className='card'>
            <h1 className='card-title'> {blogTitle} </h1>
            <h4 className='card-desc'> {blogDesc} </h4>
            <h6 className='card-footer'> {currentDay + "/" + currentMonth + "/" + currentYear} </h6>
            <div className='btn-wrapper'>
              <a href='#' className='theme-btn'>{themeBtn}</a>
            </div>
          </div> {/*./card */}          
          <div className='card'>
            <h1 className='card-title'> {blogTitle} </h1>
            <h4 className='card-desc'> {blogDesc} </h4>
            <h6 className='card-footer'> {currentDay + "/" + currentMonth + "/" + currentYear} </h6>
            <div className='btn-wrapper'>
              <a href='#' className='theme-btn'>{themeBtn}</a>
            </div>
          </div> {/*./card */}
        </div>
      </div> 
    </div> 
  </div>

);
 
