import React from 'react';
import './app.css';
import profilePic from './assets/images/mountainTopSelfie.jpeg'

class Homepage extends React.Component{
    render(){
      return(
        
        <div class="homepageGridContainer">
        <div class="columns"><img className='profileImage' src={profilePic} alt='Jesus'></img></div>
        <div class="columns"><p className="brandStatement"> brand statement Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur quibusdam necessitatibus veritatis eligendi incidunt impedit, laborum magni iure sequi repellendus corrupti, ducimus quos illum molestiae quas ad architecto earum aliquam.</p></div>
        
    </div>
      )
    }
  }
  export default Homepage;

