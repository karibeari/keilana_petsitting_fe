import React, { Component } from 'react'
import Coverflow from 'react-coverflow'

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
      <div className="coverflow-background">
        <Coverflow id="coverflow-container"
          width="90vw"
          height={480}
          displayQuantityOfSide={2}
          navigation={false}
          enableHeading={false}>
          {this.makeSlides()}
        </Coverflow>
      </div>
    )
  }
}
