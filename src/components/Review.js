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

  handleClick = (event) => {
    this.props.deleteReview(event.target.value)
  }

  render () {
    const {created_at, pet_name, human_name, content, id} = this.state
    return (
      <div className="review-grid">
        <div className="left">
          <FontAwesomeIcon className="icon" icon={this.displayPetIcon()} size="4x" /><br></br>
          <button className="myButton" value={id} onClick={this.handleClick}>Delete</button>
        </div>
        <div className="right">
          <h3>{pet_name} stayed with Keilana on {new Date(created_at).toDateString()}</h3>
          <h3>{human_name}</h3>
          <p>{content}</p>
        </div>
      </div>
    )
  }

}
