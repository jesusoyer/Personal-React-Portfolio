import React from 'react';
import './app.css';
import './queries.css'
import profilePic from './assets/images/IMG_5481.jpeg'
import course from './assets/images/udemyCourseImage.png'
class Homepage extends React.Component{
    render(){
      return(
        
        <div className="homepageGridContainer">

        
        
        <div className='introContainer'>

        <h1 className='introTitle'> Concept of the month...</h1>
        <p className='intro'> This month I am doing a UDEMY course over Responsive Web Design. This course helped me understand Flexbox, CSS Grid and media queries. It also showed me various techniques on margins that help with aligning different containers. </p>
        <br></br>

        <p className='intro'>   My favorite concept that I learned was CSS Grid. Grid allows me to easily create a responsive layout by placing elements in certain spaces in the grid. This entire portfolio was created using the techniques I have learned. Here is a link to the course...<a href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/">Link</a></p>
        
        </div>

        

        <div className="homepageFeaturedImage"><a href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/"><img className='featuredHomepageImage' src={course} alt='course'></img></a></div>

         <div className="homepageProfileImage"><img className='profileImage' src={profilePic} alt='Jesus'></img></div>

        

        <div className="brandStatment"> brand statement Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quibusdam necessitatibus veritatis eligendi incidunt impedit, laborum magni iure sequi repellendus corrupti, ducimus quos illum molestiae quas ad architecto earum aliquam.</div> 
        

    </div>
      )
    }
  }
  export default Homepage;

