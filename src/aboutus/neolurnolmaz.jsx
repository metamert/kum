import React, { Component } from "react"
import {Container,Row,Col,Button} from "react-bootstrap"
import "./about.css"
import image from "../resım/resım.jpg"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
class Aboutus extends Component {

render(){
return(

<Fade left spy={"appear"} >
    <div>
       

    <Row className="renkcontainer">


      <Col lg={6}>
      
     
      <div class="as-pic">
<img src={image} alt=""/>
</div>



      </Col>
           
      
      <Col lg={6}>
      
          <div class="as-text">
     
<div class="section-title">
<span>About us</span>
<h2>About Story</h2>
</div>
 <p class="f-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. </p>
<p class="s-para">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur
adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<Button variant="danger" className="primary-btn">Danger</Button>
</div>

</Col>

    </Row>
    
    </div>
    </Fade>
   
  )
}

}


export default Aboutus