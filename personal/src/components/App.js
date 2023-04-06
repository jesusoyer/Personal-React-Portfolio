import React from "react";
import NavBar from "./NavBar";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from "./HomePage"
import Projects from "./Projects";
import MoreInfo from "./MoreInfo";


import './app.css'



class App extends React.Component{
  render(){
    return(
      <Router>
        
        
        <NavBar />
        
      <div className="mainContainer"> 
      
      <Routes>
      <Route path="/Personal-React-Portfolio" element={<HomePage />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/moreInfo" element={<MoreInfo />}/>
      
      </Routes>
      </div>
      
      
      </Router>
    )
  }
}
export default App;