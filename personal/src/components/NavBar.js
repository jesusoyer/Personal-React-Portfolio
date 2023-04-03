import React from 'react';
import { Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline'
import {RectangleGroupIcon} from '@heroicons/react/24/outline'
import { IdentificationIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

import './app.css';
import './queries.css'




class NavBar extends React.Component{
    render(){
      return(
        
        <div className="navBar">
          <div className='logoName'>JO.Portfolio</div>
          <div className='nav' ><Link to='/Personal-React-Portfolio'>
          <HomeIcon className="navLink" title='To Homepage'/></Link></div>

          <div className='nav'><Link to='/projects'><RectangleGroupIcon className="navLink" title='Projects' /></Link></div>


          <div className='nav'><Link to="/moreInfo"><IdentificationIcon className="navLink" title='More Info' /></Link></div>

          <div className='nav'><a href = "mailto: oyervidesjesus017@gmail.com" rel='noopener noreferrer' target='_blank'><EnvelopeIcon className="navLink" title='Email Me' /></a></div>
          
        </div>
      )
    }
  }
  export default NavBar;