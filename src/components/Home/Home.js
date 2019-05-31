import React from 'react'
import './Home.css'
import img3 from '../assets/img3.jpg'

const Home = () => {

  return(
    <div className="home">
      <div id="image-container">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img className="home-image" src={img3} alt="..."  />
            </div>
            <div class="flip-card-back">
              <h1 class="flip-card-header">Welcome to Keilana's Pets & Co.</h1>
              <p>I am a dedicated pet-sitter who loves animals. I am experienced and I hope I can fulfill your pet's needs.  Your beloved animal is my first priority and I hope I can make the best experience possible for both you and your companion.  I am flexible, and I hope I can take care of any animal from your canary to your cocker spaniel.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
