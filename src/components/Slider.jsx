// import { Carousel } from 'bootstrap/dist/js/bootstrap.bundle';
import React, { Component } from 'react';

// import { Carousel } from 'bootstrap';

import Carousel from 'react-bootstrap/Carousel'



export class Slider extends Component {
    render() {
        return (
            <Carousel>
  <Carousel.Item >
    <img 
      style={{width:"100%"}}
      
      className="d-block w-100"
      src="/Img/college-students-600x400-600x400.jpg"
      alt="First slide"
    />
    
  </Carousel.Item>
  <Carousel.Item >
    <img 
      style={{width:"100%"}}
      className="d-block w-100"
      src="/Img/gettyimages-1182745546-612x612.jpg"
      alt="Second slide"
    />

  
  </Carousel.Item>
  <Carousel.Item >
    <img 
      style={{width:"100%"}}
      className="d-block w-100"
      src="/Img/istockphoto-1171062918-612x612.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item >
    <img 
      style={{width:"100%"}}
      className="d-block w-100"
      src="/Img/istockphoto-1340766096-170667a.jpg"
      alt="Third slide"
    />

    
  </Carousel.Item>
  <Carousel.Item >
    <img 
      style={{width:"100%"}}
      className="d-block w-100"
      src="/Img/3500.webp"
      alt="Third slide"
    />

    
  </Carousel.Item>
</Carousel>
        )
    }
}

export default Slider;
