import React from "react"
import {Carousel,Button} from "react-bootstrap";
import resım from "../resım/wall1.jpg"
import resım4k from "../resım/wall3.jpg"
import resım7k from "../resım/wall2.jpg"
import {Fade} from "react-reveal"
import "./slider.css"
const Slider =()=>{


	return(
    <div className="slayt">
		<Carousel >
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={resım}
      alt="First slide"
    />
    <Carousel.Caption >
		<Fade top duration={2000} distance={"200px"}>
    <h1 className="title-slide">
        
    Ünye manyetik siyah kumu
        </h1>
        </Fade> 
      	<Fade bottom duration={2000} distance={"200px"}>
        <div className={"marginbuton"}>
    <a class="buton10" href="#" target="_blank">Bilgi Al</a>
	  </div>
	  </Fade> 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
	  src={resım4k}
      alt="Third slide"
    />

    <Carousel.Caption>
	<Fade top duration={2000} distance={"200px"}>
      <h1 className="title-slide">
        
      Ünye manyetik siyah kumu
       </h1>
     
	  </Fade> 
	  <Fade bottom duration={2000} distance={"200px"}>
    <div className={"marginbuton"}>
    <a class="buton10" href="#" target="_blank">Bilgi Al</a>
	  </div>
	  </Fade> 
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
	  src={resım7k}
      alt="Third slide"
    />

    <Carousel.Caption>
	<Fade top duration={2000} distance={"200px"}>
  <h1 className="title-slide">
  
        Ünye manyetik siyah kumu
       </h1>
       <h2 className="title-slide">Lorem ipsum dolor sit amet  </h2>        
	  </Fade> 
	  <Fade bottom duration={2000} distance={"200px"}>
      <div className={"marginbuton"}>
    <a class="buton10" href="#" target="_blank">Bilgi Al</a>
	  </div>
    </Fade> 
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
	)
}
export default Slider;