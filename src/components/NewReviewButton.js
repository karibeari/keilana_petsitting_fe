import React, { Component } from 'react'
import ReviewForm from './ReviewForm'
import './ReviewContainer.css'

export default class NewReviewButton extends Component {

  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    return(
      <main>
       <ReviewForm show={this.state.show} handleClose={this.hideModal} handleNewReview={this.props.handleNewReview}/>
       <div className="center">
          <button type="button" className="myButton" onClick={this.showModal} >Add A New Review</button>
       </div>
      </main>
    )
  }
}
