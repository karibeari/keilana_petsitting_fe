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

  showHideClassName = () => this.props.show ? "modal display-block" : "modal display-none";

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
    this.props.handleClose()
  }

  render() {
    const {pet_type, pet_name, human_name, content} = this.state

    return(
      <div className={this.showHideClassName()}>
        <section className="modal-main">
          <h1 className="form-title">Add a Review</h1>
          <form  onSubmit={this.handleSubmit}>
            <select className="field" name="pet_type" value={pet_type} onChange={this.handleChange}>
              <option ></option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="fish">Fish</option>
              <option value="bird">Bird</option>
              <option value="dragon">Dragon</option>
            </select>
            <input className="field" name="pet_name" type="text" value={pet_name} placeholder="Pet Name" onChange={this.handleChange}/>
            <input className="field" name="human_name" type="text" value={human_name} placeholder="Human Name" onChange={this.handleChange}/>
            <input className="field" name="content" value={content} placeholder="Describe your pet's experience at Keilana's Petsitting" onChange={this.handleChange}/> <br></br>
            <input className="myButton" type="submit" value="Submit"/>
            <button className="myButton" onClick={this.props.handleClose}>Cancel</button>
          </form>
        </section>
      </div>
    )
  }
}
