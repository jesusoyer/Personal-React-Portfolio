import React from 'react';
import './app.css';
import './queries.css'
import profilePic from './assets/images/IMG_5481.jpeg'
import videoWebsite from './assets/images/Video_app_image.png'
class Homepage extends React.Component{
    render(){
      return(
        
        <div className="homepageGridContainer">

        

        <div className="homepageColumns"> I have created a website that uses the youtube api</div>

        <div className="homepageColumns"><img className='profileImage' src={videoWebsite} alt='video website'></img></div>

        <div className="homepageColumns"><img className='profileImage' src={profilePic} alt='Jesus'></img></div>

        

        <div className="homepageColumns"> brand statement Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quibusdam necessitatibus veritatis eligendi incidunt impedit, laborum magni iure sequi repellendus corrupti, ducimus quos illum molestiae quas ad architecto earum aliquam.</div>


    </div>
      )
    }
  }
  export default Homepage;

