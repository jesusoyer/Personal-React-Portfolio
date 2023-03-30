import React from 'react';
import './app.css';
import gymRatsImage from './assets/images/gymRatsImage.png'
import eagleEye from './assets/images/eagleeye.png'
import videoWebsite from './assets/images/Video_app_image.png'
import imageWebsite from './assets/images/searchImageApp.png'
import dailyPlanner from './assets/images/DayPlanner.png'
import weatherDashboard from './assets/images/weatherDashboard.png'
import bibliotecha from './assets/images/biblioTecha.png'



class Projects extends React.Component{
    render(){
      return(
        
        <div className="projectsGrid">
    <div className="projectHeader">Projects</div>

    <div className="featuredProject">
      <div className='projectTitles'>GymRatz</div>
      
      <img className='featuredImage' src={gymRatsImage} alt='nature'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maiores explicabo, dolore eligendi facere debitis aliquid, harum accusamus quis obcaecati excepturi provident ullam ea placeat repudiandae quo ipsam ratione rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, perferendis. Quo rerum ad excepturi quae, sed asperiores magnam! Fuga eaque, debitis dolores aut totam delectus praesentium obcaecati recusandae. Laudantium, odit!</p></div>

    <div className="projectColumns">
      <div className='projectTitles'>Eagle Eye</div>
      <img className='featuredImage' src={eagleEye} alt='nature'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores numquam saepe consequatur ab deleniti ad ipsum corporis, architecto repellat maiores ut, libero doloribus obcaecati laborum cupiditate in molestiae! Quaerat.
      </p>
      </div>

    <div className="projectColumns">
    <div className='projectTitles'>YouTube Video Website</div>
      <img className='featuredImage' src={videoWebsite} alt='nature'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores numquam saepe consequatur ab deleniti ad ipsum corporis, architecto repellat maiores ut, libero doloribus obcaecati laborum cupiditate in molestiae! Quaerat.
      </p>
      </div>

    <div className="projectColumns">
    <div className='projectTitles'>Google Image Website</div>
      <img className='featuredImage' src={imageWebsite} alt='nature'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores numquam saepe consequatur ab deleniti ad ipsum corporis, architecto repellat maiores ut, libero doloribus obcaecati laborum cupiditate in molestiae! Quaerat.
      </p>
      </div>

    <div className="projectColumns">
    <div className='projectTitles'>Daily Planner</div>
      <img className='featuredImage' src={dailyPlanner} alt='nature'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores numquam saepe consequatur ab deleniti ad ipsum corporis, architecto repellat maiores ut, libero doloribus obcaecati laborum cupiditate in molestiae! Quaerat.
      </p>
      </div>

    <div className="projectColumns">
    <div className='projectTitles'>Weather Dashboard</div>
      <img className='featuredImage' src={weatherDashboard} alt='nature'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores numquam saepe consequatur ab deleniti ad ipsum corporis, architecto repellat maiores ut, libero doloribus obcaecati laborum cupiditate in molestiae! Quaerat.
      </p>
      </div>

    <div className="projectColumns">
    <div className='projectTitles'>BiblioTecha</div>
      <img className='featuredImage' src={bibliotecha} alt='nature'></img>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores numquam saepe consequatur ab deleniti ad ipsum corporis, architecto repellat maiores ut, libero doloribus obcaecati laborum cupiditate in molestiae! Quaerat.
      </p>
      </div>

    <div className="moreProjects"><a className='linkToGithub' href = "https://github.com/jesusoyer" rel='noopener noreferrer' target='_blank'>Click for more Projects...</a></div>
    
</div>
      )
    }
  }
  export default Projects;