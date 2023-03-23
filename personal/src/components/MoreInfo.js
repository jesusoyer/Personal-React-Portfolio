import React from 'react';
import './app.css';
import headShot from './assets/images/FullSizeRender (3).jpeg'
import qrl from './assets/images/myQrl.png'

class MoreInfo extends React.Component{
  
   

    render(){
      const onButtonClick= () =>{
        fetch('Jesus Oyervides Resume.pdf').then(response => {
         response.blob().then(blob=> {
          const fileURL = window.URL.createObjectURL(blob);
          let alink = document.createElement('a');
          alink.href = fileURL
          alink.download = 'Jesus Oyervides Resume.pdf';
          alink.click();
         })
      })
    } 
      return(
        
        <div className='contactContainer'> 
      
         
         <div className="resumeCard">
         <div className='qrlTitle'>Scan to Share Portfolio...</div>
          <img className='qrlImage' src={qrl} alt='qrl'></img>
          <div><button className="resumeButton" onClick={onButtonClick}>Click to Download Resume...</button></div>
          </div>

  <div className="moreInfoCard">
  <img className='moreInfoImage' src={headShot} alt='Jesus'></img>
  
      <div className="socialMediaGrid">
       <div> Location: Austin, TX</div>
     <div><a className='mediaLinks' href = "mailto: oyervidesjesus017@gmail.com" rel='noopener noreferrer' target='_blank'>Email: oyervidesjesus017@gmail.com</a>
     </div> 

      <div><a className='mediaLinks' href = "https://www.linkedin.com/in/jesus-oyervides-jr/" rel='noopener noreferrer' target='_blank'>LinkedIn: https://www.linkedin.com/in/jesus-oyervides-jr/</a></div>

      <div><a  className='mediaLinks' href = "https://github.com/jesusoyer" rel='noopener noreferrer' target='_blank'>GitHub: https://github.com/jesusoyer</a> </div>
      </div>
      
      </div>

        

      </div>
        
      )
    }
  }
  export default MoreInfo;