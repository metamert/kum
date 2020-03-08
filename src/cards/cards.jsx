import React,{useEffect} from "react"
import "./cards.css"
import {Row,Col} from "react-bootstrap"
import { FaSwimmer } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Cards=()=>{

    useEffect(() => {
        AOS.init();
        
    }, 1)
return(
<div className="container2">
    <Row>
<Col> 
<div data-aos="fade-down">
<div className="section-title">
<span>Our Services</span>
<h2>Manyetik Siyah Kumtaşının Faydaları</h2>
</div>
</div>
</Col>

    </Row>
<Row>
    <Col lg={4} md={6}>
    <div data-aos="fade-down"
      data-aos-delay="50">
    <div className="service-item">
<FaSwimmer className="iconcard"/>
<h4>Modern Design</h4>
<p>Manyetik Siyah Kumtaşının Faydaları</p>
</div>
</div>
    </Col>
    <Col lg={4} md={6}>
    <div data-aos="fade-down"
      data-aos-delay="200"
    >
    <div className="service-item">

<h4>Modern Design</h4>
<p>Brook embraces a modern look with various enhanced pre-defined page elements.</p>
</div>
</div>
    </Col>
    <Col lg={4} md={6}>
    <div data-aos="fade-down"
     data-aos-delay="300">
    <div className="service-item">

<h4>Modern Design</h4>
<p>Brook embraces a modern look with various enhanced pre-defined page elements.</p>
</div>
</div>
    </Col>
  </Row>
</div>


)


}

export default Cards