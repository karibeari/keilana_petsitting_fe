import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faQuoteRight, faCalendarAlt, faHome, faMoneyBillAlt } from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header/Header'
import ReviewContainer from './components/Reviews/ReviewContainer'
import ImageSlideshow from './components/ImageSlideshow/ImageSlideshow'
import BookingCalendar from './components/Calendar/BookingCalendar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'

const urls = ["https://keilana-petsitting-be.herokuapp.com/reviews", "https://keilana-petsitting-be.herokuapp.com/events"]

class App extends React.Component {
  state = {
    reviews: [],
    events: []
  }

  componentWillMount() {
    document.title = "Keilana's Pets & Co"
  }

  componentDidMount() {
    Promise.all(urls.map(url =>
      fetch(url)
        .then(resp => resp.json())
    ))
    .then(data => this.setState({reviews: data[0], events: data[1]}))
  }

  importAllImages = (r) => {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }

  ImagePaths = () => {
    return Object.values(this.importAllImages(require.context('./components/assets', false, /\.(jpg)$/)))
  }

  handleNewReview = (review) => {
    fetch("https://keilana-petsitting-be.herokuapp.com/reviews", {
      method: 'POST' ,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(resp => resp.json())
    .then(review => {
      const reviews = [...this.state.reviews, review]
      this.setState({ reviews })
    })
    .catch(error => console.log(error.message))
  }

  deleteReview = (id) => {
    fetch(`https://keilana-petsitting-be.herokuapp.com/reviews/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(id)
    })
    .then(resp => resp.json())
    .then(review => {
      const reviews = this.state.reviews.filter(review => review.id !== parseInt(id))
      this.setState({ reviews })
    })
  }

  updateReview = (review) => {
    fetch(`https://keilana-petsitting-be.herokuapp.com/reviews/${review.id}`, {
      method: 'PATCH' ,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(review)
    })
    .then(resp => resp.json())
    .then(newReview => {
      const reviews = this.state.reviews.filter(rev => rev.id !== newReview.id)
      const newReviews = [...reviews, newReview]
      this.setState({ reviews: newReviews })
    })
    .catch(error => console.log(error.message))
  }

  handleNewBooking = (event) => {
    fetch("https://keilana-petsitting-be.herokuapp.com/events", {
      method: 'POST' ,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(event)
    })
    .then(resp => resp.json())
    .then(newEvent => {
      console.log(newEvent)
      const events = [...this.state.events, newEvent]
      this.setState({ events })
    })
    .catch(error => console.log(error.message))
  }

  render () {
    return (
      <main >
        <Header />
        <Router>
          <div className="navbar">
            <ul>
              <li>
                <NavLink className="link" to="/" activeClassName="hurray"><FontAwesomeIcon className="icon hvr-grow-rotate" icon={faHome} size="4x" /></NavLink>
              </li>
              <li>
                <NavLink className="link" to="/images" activeClassName="hurray"><FontAwesomeIcon className="icon hvr-grow-rotate" icon={faCamera} size="4x" /></NavLink>
              </li>
              <li>
                <NavLink className="link" to="/reviews" activeClassName="hurray"><FontAwesomeIcon className="icon hvr-grow-rotate" icon={faQuoteRight} size="4x" /></NavLink>
              </li>
              <li>
                <NavLink className="link" to="/booking" activeClassName="hurray"><FontAwesomeIcon className="icon hvr-grow-rotate" icon={faCalendarAlt} size="4x" /></NavLink>
              </li>
              <li>
                <NavLink className="link" to="/services" activeClassName="hurray"><FontAwesomeIcon className="icon hvr-grow-rotate" icon={faMoneyBillAlt} size="4x" /></NavLink>
              </li>
            </ul>
          </div>

            <Route exact path="/" component={ Home } />
            <Route path="/services" component={ Services } />
            <Route
              path="/images"
              render={props => <ImageSlideshow images={this.ImagePaths()} />}
            />
            <Route path="/reviews"
              render={props => <ReviewContainer reviews={this.state.reviews} handleNewReview={this.handleNewReview} deleteReview={this.deleteReview} updateReview={this.updateReview}/>}
            />
            <Route path="/booking"
              render={props => <BookingCalendar events={this.state.events} handleNewBooking={this.handleNewBooking}/>}
            />
          </Router>
      </main>
    )
  }

}

export default App;
