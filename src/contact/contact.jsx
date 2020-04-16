
import React,{useEffect} from "react"
import "./contact.css"
import {Col,Row,Button} from "react-bootstrap"
import { FaPhone,FaEnvelope,FaLocationArrow } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';
const contact=()=>{


return(
<div className="container3">

<Row>
<Col lg={5} className="özel5">
<div data-aos="fade-right"
       >  
<div className="contact-text">
<h4>Contacts Us</h4>
<div className="ct-item">
<div className="ci-icon">
<span className="ti-location-pin">
<FaLocationArrow></FaLocationArrow>

</span>
</div>
<div className="ci-text">
<ul>
<li>
<span>Our Location</span>
Kaledere mah.
</li>
</ul>
</div>
</div>
<div className="ct-item">
<div className="ci-icon">
<span className="ti-mobile">
    <FaPhone></FaPhone>
</span>
</div>
<div className="ci-text">
<ul>
<li>
<span>Phone:</span>
+90 05457255739
</li>
</ul>
</div>
</div>
<div className="ct-item">
<div className="ci-icon">
<span className="ti-email">
    <FaEnvelope></FaEnvelope>
</span>
</div>
<div className="ci-text">
<ul>
<li>
<span>Mail</span>
orkunmertgs41@gmail.com
</li>
</ul>
</div>
</div>
</div>
</div>
</Col>
<Col lg={7} className="özel">
<div className="contact-option">
<div data-aos="fade-down"
        
      >  
<h4>Leave A Comment</h4>
</div>
<form  class="comment-form contact-form">
<Row className="row1">
<Col lg={6}>
<div data-aos="fade-right"
        
      >  
<input type="text" placeholder={"Messages"}></input>
</div>
</Col>
<Col lg={6}>
<div data-aos="fade-right"
      
      >  
<input type="text" placeholder={"email"}></input>
</div>
</Col>

<Col className="coz">
<div data-aos="fade-up"
        
        
      >  
<textarea placeholder={"Messages"}></textarea>
<Button variant="danger">Danger</Button>
</div>
</Col>
</Row>
</form>
</div>
</Col>
</Row>


</div>


)

}


export default contact