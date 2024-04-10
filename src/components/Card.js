// const blogTitle = " Blog App With React  ";
// const blogDesc = " To check your version of Node. js, open Terminal (or another CLI of your choice), and type the command node -v . Press Enter. The returning line will display the Node.Jan 10, 2023 ";
const date = new Date();
const currentDay = date.getDay();
const currentMonth = date.getMonth();
const currentYear = date.getFullYear();
const themeBtn = "Read More";

function Card(props) { 
  const {blogTitle, blogDesc} = props;
  return <div className='card'>
    <h1 className='card-title'> {blogTitle} </h1>
    <h4 className='card-desc'> {blogDesc} </h4>
    <h6 className='card-footer'> {currentDay + "/" + currentMonth + "/" + currentYear} </h6>
    <div className='btn-wrapper'>
      <a href='www.facebook.com' className='theme-btn'>{themeBtn}</a>
    </div>
  </div>


}

export default Card;