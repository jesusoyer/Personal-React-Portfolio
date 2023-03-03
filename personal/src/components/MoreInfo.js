import React from 'react';
import './app.css';
import headShot from './assets/images/FullSizeRender (3).jpeg'
class MoreInfo extends React.Component{
    render(){
      return(
        
        <div className='contactContainer'> 
         <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, a nisi. Natus similique alias laboriosam illum in delectus eveniet ab totam aspernatur omnis nam, quod magni nostrum ipsa ex quis?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, beatae illo nisi sit aspernatur modi. Error necessitatibus sed enim maxime. Dicta qui ratione perspiciatis quidem minus, consectetur placeat veritatis nemo! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugiat quasi incidunt deleniti unde labore omnis minus delectus in itaque, quam maiores nulla, odio, quod voluptas praesentium suscipit quisquam atque perferendis!
  </div>

  <div className="moreInfoCard">
  <img className='moreInfoImage' src={headShot} alt='Jesus'></img>
      
      <div className="socialMediaGrid">
       <div> Location: Austin, TX</div>
     <div><a  href = "mailto: oyervidesjesus017@gmail.com" rel='noopener noreferrer' target='_blank'>Email: oyervidesjesus017@gmail.com</a>
     </div> 

      <div><a  href = "https://www.linkedin.com/in/jesus-oyervides-jr/" rel='noopener noreferrer' target='_blank'>LinkedIn: https://www.linkedin.com/in/jesus-oyervides-jr/</a></div>

      <div><a  href = "https://github.com/jesusoyer" rel='noopener noreferrer' target='_blank'>GitHub: https://github.com/jesusoyer</a> </div>

      </div>
      </div>
        </div>
      )
    }
  }
  export default MoreInfo;