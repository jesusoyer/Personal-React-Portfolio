import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from "./HomePage"
import Projects from "./Projects";
import MoreInfo from "./MoreInfo";
import Qrl from "./Qrl";

import './app.css'



class App extends React.Component{
  render(){
    return(
      <Router>
        
        <NavBar />
      <div className="mainContainer"> 
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/moreInfo" element={<MoreInfo />}/>
      <Route path="/qrl" element={<Qrl />}/>
      </Routes>
      </div>
      <Footer />
      </Router>
    )
  }
}
export default App;