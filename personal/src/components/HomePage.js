import React from 'react';
import { Link } from 'react-router-dom';
import './app.css';
import './queries.css'
import profilePic from './assets/images/IMG_5481.jpeg'
import course from './assets/images/udemyCourseImage.png'
class Homepage extends React.Component{
    render(){
      return(
        
        <div className="homepageGridContainer">

        
        
        <div className='introContainer'>

        <h1 className='introTitle'> Concept of the month: Building Responsive Websites</h1>

        <div className="homepageFeaturedImage"><img className='featuredHomepageImage' src={course} alt='course'></img></div>

        
        <p className='intro'> This month I am doing a UDEMY course over Responsive Web Design. This course helped me understand Flexbox, CSS Grid and media queries. It also showed me various techniques on margins that help with aligning different containers. 
        <br></br>
        <br></br>

          My favorite concept that I learned was CSS Grid. Grid allows me to easily create a responsive layout by placing elements in certain spaces in the grid. I also really liked combining both Flexbox and CSS Grid. Which is how this container is formatted. It is in the first grid column in a 2 X 2 grid, and within that column is a flexbox column. This entire portfolio was created using the techniques I have learned. Here is a link to the course...<a href="https://www.udemy.com/course/design-and-develop-a-killer-website-with-html5-and-css3/">Link</a></p>
        
        

        
        
        
        </div>


        <div className='brandStatementContainer'>
         <div className="homepageProfileImage"><img className='profileImage' src={profilePic} alt='Jesus'></img></div>        

        <div className="brandStatment"> <p>Hello My name is Jesus Oyervides Jr, I recently graduated from a full-stack development bootcamp. My primary skills as of now are in Javascript, REACT, Node.js and Express.js. I plan in the future on developing a Vue.js portfolio as well as gathering skills in Python. My goal is to gather as much knowledge and skills to create or aid in the development of web applications.</p>
        <br></br>
        <p>I am currently practicing with React Components while also strengthening my Responsive Web Devlopment skills. I also have been working on Javascript algorithms in LeetCode. 
        </p>
        <br></br>
        <p>In my personal life you can find me doing various activities. I love to read books on many different topics, however I would say that I prefer non-fiction books with historical, scientific and sociological topics although I like a good memoir every now and then. I also enjoy physical activities such as lifting weights, bouldering and hiking. You could actually find me in the gym nose deep in a book while taking a stroll on the treadmill. I can also talk your head off when comes to movies, I love diving into the concepts and topics of movies, good or bad I like having something to say about a recently released flick. I would say that the greatest decade of movies has to be the 80's, nothing can top the practicality, originality and  grittiness of them.   
          </p> 
          <br></br>
          <p>
            Thank you so much for stopping by and checking out my portfolio. I hope you enjoy my projects and I am looking forward for you to see my progress as I move forward in achieving my goals. Feel free to click on the link below to view some of the projects I have worked on and have created in the past. I will also post more projects soon.<Link to='/projects'> Link to my projects...</Link>
          </p>
        </div> 
        </div>

    </div>
      )
    }
  }
  export default Homepage;

