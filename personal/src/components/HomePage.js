import React from 'react';
import './app.css';
import './queries.css'
import profilePic from './assets/images/IMG_5481.jpeg'

class Homepage extends React.Component{
    render(){
      return(
        
        <div class="homepageGridContainer">
        <div class="homepageColumns"><img className='profileImage' src={profilePic} alt='Jesus'></img></div>
        <div class="brandStatement"> brand statement Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quibusdam necessitatibus veritatis eligendi incidunt impedit, laborum magni iure sequi repellendus corrupti, ducimus quos illum molestiae quas ad architecto earum aliquam.</div>
    </div>
      )
    }
  }
  export default Homepage;

