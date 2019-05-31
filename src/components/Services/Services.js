import React from 'react'
import './Services.css'

const Services = () => {

  return(
    <div className="services">

          <div class="services-card" id="one">
            <div class="services-card-inner">
              <div class="services-card-front">
                <div className="fade-card">
                <h1>Small Dogs</h1>
                </div>
              </div>
              <div class="services-card-back">
                <h3>(Yorkies, Chihuahuas, etc)</h3>
                <h4>$15 per day</h4>
              </div>
            </div>
          </div>
          <div class="services-card" id="two">
            <div class="services-card-inner">
              <div class="services-card-front">
                <div className="fade-card">
                <h1>Medium Dogs</h1>
                </div>
              </div>
              <div class="services-card-back">
                <h3>(Yodel Dogs, Schnauzers, etc)</h3>
                <h4>$20 per day</h4>
              </div>
            </div>
          </div>
          <div class="services-card" id="three">
            <div class="services-card-inner">
              <div class="services-card-front">
                <div className="fade-card">
                <h1>Large Dogs</h1>
                </div>
              </div>
              <div class="services-card-back">
                <h3>(Great Danes Mastiffs, etc)</h3>
                <h4>$25 per day</h4>
              </div>
            </div>
          </div>
          <div class="services-card" id="four">
            <div class="services-card-inner">
              <div class="services-card-front">
                <div className="fade-card">
                <h1>Cats</h1>
                </div>
              </div>
              <div class="services-card-back">
                <h3>(All cats)</h3>
                <h4>$15 per day</h4>
              </div>
            </div>
          </div>
          <div class="services-card" id="five">
            <div class="services-card-inner">
              <div class="services-card-front">
                <div className="fade-card">
                <h1>Small Mammals and Reptiles</h1>
                </div>
              </div>
              <div class="services-card-back">
                <h3>(Hamsters, Snakes, Hedgehogs, etc.)</h3>
                <h4>$10 per day</h4>
              </div>
            </div>
          </div>
          <div class="services-card" id="six">
            <div class="services-card-inner">
              <div class="services-card-front">
                <div className="fade-card">
                <h1>BEST CUSTOMER DISCOUNTS</h1>
                </div>
              </div>
              <div class="services-card-back">
                <h3>(After 3 visits)</h3>
                <h4>$5 off per day</h4>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Services
