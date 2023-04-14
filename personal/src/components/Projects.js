import React from 'react';
import './app.css';
import './queries.css'
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
      <p className='projectDescriptions'>GymRatz is a web application using React.js, Express.js, Node,js, MongoDB and GraphQl.GymRatz allows users to post and share their personal workouts with other users. This project was a collaboration with three other students in my Full-Stack web development bootcamp. <a  className='projectLinks' href = "https://github.com/jesusoyer/Gym-Ratz" rel='noopener noreferrer' target='_blank'>Click to view Project..</a>   </p></div>

    <div className="projectColumns">
      <div className='projectTitles'>Eagle Eye</div>
      <img className='featuredImage' src={eagleEye} alt='nature'></img>
      <p className='projectDescriptions'>EagleEye is a static web application created using the State Park API and the Open Weather API aswell as basic Javascript, Html and CSS. EagleEye allows users to search for national parks by state; It also presents the user with various information such as weather, park descriptions, alerts, hours and much more. This project was a collaboration with three other students in my Full-Stack web development bootcamp.
      <a  className='projectLinks' href = "https://github.com/surfinsofia/EagleEye" rel='noopener noreferrer' target='_blank'>Click to view Project..</a> 
      </p>
      </div>

    <div className="projectColumns">
    <div className='projectTitles'>YouTube Video Website</div>
      <img className='featuredImage' src={videoWebsite} alt='nature'></img>
      <p className='projectDescriptions'> This is my version of a YouTube video website created using the YouTube API and REACT.js. This website works much like youtube and allows users to search for videos through a search bar. This project was thought out by trying to replicate youtubes UI. I wanted to see if I could do it and it turns out I could.
      <a  className='projectLinks' href = "https://github.com/jesusoyer/Video-website" rel='noopener noreferrer' target='_blank'> Click to view Project..</a> 
      </p>
      </div>

    <div className="projectColumns">
    <div className='projectTitles'>Google Image Website</div>
      <img className='featuredImage' src={imageWebsite} alt='nature'></img>
      <p className='projectDescriptions'>This is my rendition of an image search web application created using the Google Images API and REACT.js. This website allows users to search for images using a search bar. There is a big selection of images that can search because of how powerful Google's API is. I thought of doing this project when I stumbled upon Googles API and wanted to do something simple. 
      <a  className='projectLinks' href = "https://jesusoyer.github.io/image-search-engine/" rel='noopener noreferrer' target='_blank'> Click to view Project..</a> 
      </p>
      </div>

    <div className="projectColumns">
    <div className='projectTitles'>Daily Planner</div>
      <img className='featuredImage' src={dailyPlanner} alt='nature'></img>
      <p className='projectDescriptions'>This is a daily planner web application created using MomentJs, Bootstrap, Javascript, HTML, and CSS. This website allows the user to plan their day by utilizing local storage to save their events. I created this project to plan my day.  <a  className='projectLinks' href = "https://jesusoyer.github.io/Day-Planner/" rel='noopener noreferrer' target='_blank'> Click to view Project..</a>  
      </p>
      </div>

    <div className="projectColumns">
    <div className='projectTitles'>Weather Dashboard</div>
      <img className='featuredImage' src={weatherDashboard} alt='nature'></img>
      <p className='projectDescriptions'>This is a personal weather dashboard web application created using the Open Weather API, Javascript, HTML, and CSS. This website allows users to search a city and see a weekly forcast for it. This website uses local storage to save a users searches. I created this project to help me see the weather for my day.
      <a  className='projectLinks' href = "https://jesusoyer.github.io/Weather-Dashboard/" rel='noopener noreferrer' target='_blank'> Click to view Project..</a>
      </p>
      </div>

    <div className="projectColumns">
    <div className='projectTitles'>BiblioTecha</div>
      <img className='featuredImage' src={bibliotecha} alt='nature'></img>
      <p className='projectDescriptions'> BiblioTecha is a web application that was created using Handlebars.js, SQL, Express.js, and Node.js. It allows users to create a profile and share books with other users. This project was a collaboration with three other students in my bootcamp cohort. 
      <a  className='projectLinks' href = "https://github.com/jesusoyer/Bibliotecha-" rel='noopener noreferrer' target='_blank'> Click to view Project..</a>
      </p>
      </div>

    <div className="moreProjects"><a className='linkToGithub' href = "https://github.com/jesusoyer" rel='noopener noreferrer' target='_blank'>Click for more Projects...</a></div>
    
</div>
      )
    }
  }
  export default Projects;