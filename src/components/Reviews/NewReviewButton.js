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
      <section>
       <ReviewForm show={this.state.show} handleClose={this.hideModal} handleNewReview={this.props.handleNewReview}/>
       <div className="center review-button">
          <button type="button" className="myButton" id="new-review-button" onClick={this.showModal} >Add A New Review</button>
       </div>
      </section>
    )
  }
}
