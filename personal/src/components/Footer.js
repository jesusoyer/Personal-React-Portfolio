import React from 'react';
import './app.css';

class Footer extends React.Component{
    render(){
      return(
        
     <div className='footer'>
      
    <div className=""><a className='footerLinks' href = "mailto: oyervidesjesus017@gmail.com" rel='noopener noreferrer' target='_blank'>Email Me</a></div>

     <div className=""><a className='footerLinks' href = "https://github.com/jesusoyer" rel='noopener noreferrer' target='_blank'>My GitHub</a></div>

    <div className=""><a className='footerLinks' href = "https://www.linkedin.com/in/jesus-oyervides-jr/" rel='noopener noreferrer' target='_blank'>My LinkedIn</a></div>
        
    </div>
      )
    }
  }
  export default Footer;
