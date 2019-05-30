import React from 'react'

import './ImageSlideshow.css'

const Slide = ({ image }) => {


  function setImage() {
    return <img src={image} alt='...' />
  }

  return (<div className="slide">
    {setImage()}
  </div>
)
}

export default Slide
