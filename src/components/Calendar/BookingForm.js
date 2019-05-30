import React, { Component } from 'react'
import { DateRange } from 'react-date-range';

export default class BookingForm extends Component {

  constructor() {
    super()
    this.state = {
      start: '',
      end: '',
      human_name: '',
      pet_name: ''
    }
  }

  showHideClassName = () => this.props.show ? "modal display-block" : "modal display-none";

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleRange = (range) => {
    this.setState({
      start: range.startDate.toString(),
      end: range.endDate.toString()
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.handleNewBooking(this.state)
    this.setState({
      start: '',
      end: '',
      human_name: '',
      pet_name: ''
    })
    this.props.handleClose()
  }

  render() {
    const {pet_name, human_name} = this.state

    return(
      <div className={this.showHideClassName()}>

        <section className="modal-main">
          <form  onSubmit={this.handleSubmit}>
            <input className="field" name="pet_name" type="text" value={pet_name} placeholder="Pet Name" onChange={this.handleChange} />
            <input className="field" name="human_name" type="text" value={human_name} placeholder="Human Name" onChange={this.handleChange} />
            <div className="date-range">
              <DateRange onInit={this.handleSelect} onChange={this.handleRange} />
            </div>
            <input className="myButton" type="submit" value="Submit"/>
            <button className="myButton" onClick={this.props.handleClose}>Cancel</button>
          </form>
        </section>
      </div>
    )
  }
}
