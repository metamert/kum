import React from 'react';
import logo from './logo.svg';
import './App.css';
import Slider from "./slider/slider"
import About from "./aboutus/about"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar/navbar"
import Cards from "./cards/cards"
import Video from "./video/video"
import Contact from "./contact/contact"

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
       <Slider></Slider>
 

  <About></About>
  <Cards></Cards>

 
 
  
  <Video></Video>
<div>  <Contact></Contact>  </div>

<div className="finish">

© 3/8/2020  this site made by Orkun Mert Yigit orkunmertgs41@gmail.com
</div>
  
  
  </div>
    
    
    
   
  );
}

export default App;
