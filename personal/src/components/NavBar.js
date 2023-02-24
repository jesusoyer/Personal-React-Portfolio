import React from 'react';
import './app.css';

class NavBar extends React.Component{
    render(){
      return(
        
        <div className="navBar">
          <div className='logoName'>JO.Portfolio</div>
          <div className='nav'>Projects</div>
          <div className='nav'>More Info</div>
          <div className='nav'>QRL</div>
        </div>
      )
    }
  }
  export default NavBar;