import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog, faCat, faDove, faFish, faDragon } from '@fortawesome/free-solid-svg-icons'
import './ReviewContainer.css'

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
      id: props.id
    }
  }

  displayPetIcon = () => {
    return petIcon[this.state.pet_type]
  }

  handleDeleteReview = (event) => {
    this.props.deleteReview(event.target.value)
  }

  // handleEditReview = (event) => {
  //   console.log(this.props.filter(review => review.id === event.target.id))
  // }

  render () {
    const {created_at, pet_name, human_name, content, id} = this.state
    return (
      <div className="review-grid">
        <div className="left">
          <FontAwesomeIcon className="icon" icon={this.displayPetIcon()} size="4x" /><br></br>
          <h1>{pet_name}</h1>
        </div>
        <div className="center">
          <h2>{new Date(created_at).toDateString()}</h2>
          <h3>{human_name} ({pet_name}'s human)</h3>
          <p>{content}</p>
        </div>
        <div className="right">
          <button className="myButton" value={id} onClick={this.handleEditReview}>Edit</button>
          <button className="myButton" value={id} onClick={this.handleDeleteReview}>Delete</button>
        </div>
      </div>
    )
  }
}
