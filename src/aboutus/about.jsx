import React, { Component } from "react"
import {Container,Row,Col,Button} from "react-bootstrap"
import "./about.css"
import image from "../resım/babam.jpg.jpeg"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import AOS from 'aos';
import 'aos/dist/aos.css';
class Aboutus extends Component {

componentDidMount(){


// You can also pass an optional settings object
// below listed default settings
AOS.init();

}




render(){
return(

<div>


    <div>
       

    <Row className="renkcontainer">

    
      <Col lg={6}>
      <div data-aos="fade-right"
        data-aos-duration="2000"
        data-aos-offset="300"
      >  
<div>    
      <div class="as-pic">
<img src={image} alt=""/>
</div>
</div> 
</div> 


      </Col>
             
      
      <Col lg={6}>
      <div data-aos="fade-left"
          data-aos-offset="200"
            data-aos-duration="2000">   
          <div class="as-text">
              
<div class="section-title">

<span>About us</span>
<h2>ORHAN YİĞİT</h2>

</div>
 <p class="f-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. </p>
<p class="s-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<Button variant="danger" className="primary-btn">Danger</Button>
</div>
</div>

</Col>

    </Row>
    
    </div>
  
</div>
   
  )
}

}


export default Aboutus