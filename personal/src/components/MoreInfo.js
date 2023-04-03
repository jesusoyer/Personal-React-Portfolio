import React from 'react';
import './app.css';
import './queries.css'
import headShot from './assets/images/FullSizeRender (3).jpeg'
import qrl from './assets/images/myQrl.png'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'

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
          <div><button className="resumeButton" onClick={onButtonClick}> Resume <ArrowDownTrayIcon className="resumeLink" title='Download Resume' /></button></div>
          </div>

  <div className="moreInfoCard">
  <img className='moreInfoImage' src={headShot} alt='Jesus'></img>
  
      <div className="socialMediaGrid">
        <div className='fullName'>Jesus Oyervides</div>
        <div className='occupation'>Web Developer</div>
       <div className='linkTitles'> Location: Austin, TX</div>
     <div className='linkTitles'>Email: <a className='mediaLinks' href = "mailto: oyervidesjesus017@gmail.com" rel='noopener noreferrer' target='_blank'>oyervidesjesus017@gmail.com</a>
     </div> 

      <div className='linkTitles'>LinkedIn: <a className='mediaLinks' href = "https://www.linkedin.com/in/jesus-oyervides-jr/" rel='noopener noreferrer' target='_blank'> https://www.linkedin.com/in/jesus-oyervides-jr/</a></div>

      <div className='linkTitles'>GitHub: <a  className='mediaLinks' href = "https://github.com/jesusoyer" rel='noopener noreferrer' target='_blank'>https://github.com/jesusoyer</a> </div>
      </div>
      
      </div>

        

      </div>
        
      )
    }
  }
  export default MoreInfo;