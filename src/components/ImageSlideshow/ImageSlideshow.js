import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

import './ImageSlideshow.css'

export default class ImageSlideshow extends Component {
  constructor(props) {
    super(props)
    this.state = {
      images: props.images,
      currentIndex: 0,
      translateValue: 0
    }
  }

  makeSlides = () => this.state.images.map(image => {
    return <div>
      <img src={image} alt=""/>
    </div>
  })

  render() {
    return(
      <div className="slideshow-background">
        <Carousel className="slider-container" autoPlay>
          {this.makeSlides()}
        </Carousel>
      </div>
    )
  }
}
