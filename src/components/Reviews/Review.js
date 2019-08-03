import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faCat, faDove, faFish, faDragon } from '@fortawesome/free-solid-svg-icons'
import './ReviewContainer.css'
import EditReviewForm from './EditReviewForm'

const petIcon = {
   dog: faDog,
   cat: faCat,
   bird: faDove,
   fish: faFish,
   dragon: faDragon
 }

export default class Review extends Component {
  constructor (props) {
    super(props)
    this.state = {
      created_at: props.created_at,
      pet_type: props.pet_type,
      pet_name: props.pet_name,
      human_name: props.human_name,
      content: props.content,
      id: props.id,
      show: false
    }
  }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  displayPetIcon = () => {
    return petIcon[this.state.pet_type]
  }

  handleDeleteReview = (event) => {
    this.props.deleteReview(event.target.value)
  }

  render () {
    const {created_at, pet_name, human_name, content, id} = this.state
    return (
      <div className="review-grid">
        <EditReviewForm show={this.state.show} handleClose={this.hideModal} updateReview={this.props.updateReview} review={this.state}/>
        <div className="left">
          <h1 id="petname">{pet_name}</h1>
          <h3>Human: {human_name}</h3>
          <h3>{new Date(created_at).toDateString()}</h3>
        </div>
        <div className="center">
          <FontAwesomeIcon className="icon" icon={this.displayPetIcon()} size="4x" /><br></br>
          <div className="bubble pointer">"{content}"</div>
        </div>
        <div className="right">
          <button className="myButton" value={id} onClick={this.showModal}>Edit</button>
          <button className="myButton" value={id} review={this.props} onClick={this.handleDeleteReview}>Delete</button>
        </div>
      </div>
    )
  }
}
