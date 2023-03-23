import React from 'react';
import { Link } from 'react-router-dom';
import './app.css';

class NavBar extends React.Component{
    render(){
      return(
        
        <div className="navBar">
          <div className='logoName'>JO.Portfolio</div>
          <div className='nav'><Link to='/'>Home</Link></div>
          <div className='nav'><Link to='/projects'>Projects</Link></div>
          <div className='nav'><Link to="/moreInfo">More Info</Link></div>
          
        </div>
      )
    }
  }
  export default NavBar;