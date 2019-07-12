import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'
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
        <header className="slideshow-header">
          <h2>Life Goal:</h2>
          <h3>Pet ALL the dogs</h3>
          <h5>(and cats, snakes, hamsters, etc.)</h5>
        </header>
        <Carousel className="slider-container" autoPlay>

          {this.makeSlides()}
      </Carousel>
    </div>
  )
  }
}

//
// <div className="slider-container">
// <div className="slider">
//   <img src={this.state.images[this.state.currentIndex]} alt='...' />
//     <div className="prev" aria-hidden="true" onClick={this.goToPrevSlide}><FontAwesomeIcon icon={faChevronCircleLeft} size="2x" /></div>
//     <div className="next" aria-hidden="true" onClick={this.goToNextSlide}><FontAwesomeIcon icon={faChevronCircleRight} size="2x" /></div>
// </div>
// </div>
