import React, { Component } from 'react'
import './ReviewForm.css'

export default class ReviewForm extends Component {

  constructor() {
    super()
    this.state = {
      pet_type: '',
      pet_name: '',
      human_name: '',
      content: ''
    }
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleNewReview(this.state)
    this.setState({
      pet_type: '',
      pet_name: '',
      human_name: '',
      content: ''
    })
  }

  render() {
    const {pet_type, pet_name, human_name, content} = this.state
    return(
      <div className="form-container">
        <h1 className="form-title">Add a Review</h1>
        <form className="form" onSubmit={this.handleSubmit}>
          <select className="field" name="pet_type" value={pet_type} onChange={this.handleChange}>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="fish">Fish</option>
            <option value="bird">Bird</option>
            <option value="dragon">Dragon</option>
          </select>
          <input className="field" name="pet_name" type="text" value={pet_name} placeholder="Pet Name" onChange={this.handleChange}/>
          <input className="field" name="human_name" type="text" value={human_name} placeholder="Human Name" onChange={this.handleChange}/>
          <input className="field" name="content" value={content} placeholder="Describe your pet's experience at Keilana's Petsitting" onChange={this.handleChange}/>
          <input className="myButton" type="submit" value="Submit"/>
        </form>
      </div>
    )
  }
}
