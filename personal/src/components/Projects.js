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
      <img className='featuredImage' src={gymRatsImage} alt='nature'></img>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique maiores explicabo, dolore eligendi facere debitis aliquid, harum accusamus quis obcaecati excepturi provident ullam ea placeat repudiandae quo ipsam ratione rem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, perferendis. Quo rerum ad excepturi quae, sed asperiores magnam! Fuga eaque, debitis dolores aut totam delectus praesentium obcaecati recusandae. Laudantium, odit!</div>

    <div className="projectColumns">
      <div className='projectTitles'>Eagle Eye</div>
      <img className='featuredImage' src={eagleEye} alt='nature'></img>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius asperiores numquam saepe consequatur ab deleniti ad ipsum corporis, architecto repellat maiores ut, libero doloribus obcaecati laborum cupiditate in molestiae! Quaerat.</div>

    <div className="projectColumns">
    <div className='projectTitles'>Video Website</div>
      <img className='featuredImage' src={videoWebsite} alt='nature'></img>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam ipsa consequuntur impedit! Aspernatur repudiandae magni nihil quaerat fugit, est delectus et facilis, fuga quod voluptatem sit! Eligendi nulla veritatis culpa?</div>

    <div className="projectColumns">
    <div className='projectTitles'>Image Website</div>
      <img className='featuredImage' src={imageWebsite} alt='nature'></img>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, soluta assumenda? Quos vero beatae nostrum nobis impedit. Explicabo, quod accusantium? Sit dolore commodi doloribus tempore iusto fuga esse soluta quae.</div>

    <div className="projectColumns">
    <div className='projectTitles'>Daily Planner</div>
      <img className='featuredImage' src={dailyPlanner} alt='nature'></img>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni aliquam voluptatibus ipsam! Doloremque quidem animi tenetur similique. Perspiciatis rem, accusamus, amet ab aliquid, iste placeat qui ea ut nulla error?</div>

    <div className="projectColumns">
    <div className='projectTitles'>Weather Dashboard</div>
      <img className='featuredImage' src={weatherDashboard} alt='nature'></img>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, nostrum mollitia. Perferendis itaque accusantium deserunt sunt architecto molestiae esse, nobis cupiditate eveniet ex sint, adipisci aliquam necessitatibus. Doloremque, quasi neque?</div>

    <div className="projectColumns">
    <div className='projectTitles'>BiblioTecha</div>
      <img className='featuredImage' src={bibliotecha} alt='nature'></img>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, hic, ipsum assumenda earum harum atque est maxime vel, fugit suscipit illum. Accusamus ex unde maxime! Ducimus aut iste esse rem!</div>

    <div className="moreProjects"><a className='linkToGithub' href = "https://github.com/jesusoyer" rel='noopener noreferrer' target='_blank'>Click for more Projects...</a></div>
    
</div>
      )
    }
  }
  export default Projects;