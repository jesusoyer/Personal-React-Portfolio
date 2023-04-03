import React from 'react';
import './app.css';
import './queries.css'
import qrl from './assets/images/myQrl.png'
class Qrl extends React.Component{
    render(){
      return(
        
        <div class="qrlgridContainer">
        <div class="qrlHeader">Share me with others</div>
        <div class="qrlContainer"><img className='featuredImage' src={qrl} alt='qrl'></img></div>
        
        
    </div>
      )
    }
  }
  export default Qrl;