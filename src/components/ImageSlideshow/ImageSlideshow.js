import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleLeft, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'

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

  goToPrevSlide = () => {
    if(this.state.currentIndex === 0) {
      return this.setState({currentIndex: 0})
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1,

    }))
   }

  goToNextSlide = () => {
    if(this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0
      })
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1 }))
  }

  render() {
    return(
      <div className="slider-container">
        <div className="slider">
            <img src={this.state.images[this.state.currentIndex]} alt='...' />
              <div className="prev" aria-hidden="true" onClick={this.goToPrevSlide}><FontAwesomeIcon icon={faChevronCircleLeft} size="2x" /></div>
              <div className="next" aria-hidden="true" onClick={this.goToNextSlide}><FontAwesomeIcon icon={faChevronCircleRight} size="2x" /></div>
        </div>
      </div>
    )
  }
}
