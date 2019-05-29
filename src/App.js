import React from 'react';
import './App.css';
import Header from './components/Header'
import ReviewContainer from './components/ReviewContainer'
import ImageSlideshow from './components/ImageSlideshow'
import BigCalendar from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'

const localizer = BigCalendar.momentLocalizer(moment)
const urls = ["http://localhost:3000/reviews", "http://localhost:3000/events"]

class App extends React.Component {
  state = {
    reviews: [],
    events: []
  }

  componentDidMount() {
    Promise.all(urls.map(url =>
      fetch(url)
        .then(resp => resp.json())
    ))
    .then(data => this.setState({reviews: data[0], events: data[1]}))
  }

// this.setState(reviews: data[0], events: data[1])




  importAllImages = (r) => {
    let images = {};
    r.keys().map((item, index) => { return images[item.replace('./', '')] = r(item); });
    return images;
  }

  ImagePaths = () => {
    return Object.values(this.importAllImages(require.context('./components/assets', false, /\.(jpg)$/)))
  }

  handleNewReview = (review) => {
    fetch("http://localhost:3000/reviews", {
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
    fetch(`http://localhost:3000/reviews/${id}`, {
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

  // updateReview = (review) => {
  //   fetch("http://localhost:3000/reviews", {
  //     method: 'POST' ,
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(review)
  //   })
  //   .then(resp => resp.json())
  //   .then(review => {
  //     const reviews = [...this.state.reviews, review]
  //     this.setState({ reviews })
  //   })
  //   .catch(error => console.log(error.message))
  // }

  render () {
    return (
      <div className="grid-container">
        <Header />
        <ImageSlideshow images={this.ImagePaths()}/>
        <ReviewContainer reviews={this.state.reviews} handleNewReview={this.handleNewReview} deleteReview={this.deleteReview}/>
        <div className="calendar-container">
          <div className="calendar">
            <BigCalendar
            localizer={localizer}
            events={start: this.state.start, end: this.state.end}
            startAccessor="start"
            endAccessor="end"
            />
          </div>
        </div>
      </div>
    )
  }

}

export default App;
