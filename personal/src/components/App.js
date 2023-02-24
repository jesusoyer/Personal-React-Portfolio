import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import HomePage from "./HomePage"

import './app.css'

class App extends React.Component{
  render(){
    return(
      <div>
        <NavBar />
      <div className="mainContainer"> 
      <HomePage />
      </div>
      <Footer />
      </div>
    )
  }
}
export default App;