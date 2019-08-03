import React, { Component } from 'react'
import BookingForm from './BookingForm'

export default class NewBookingButton extends Component {

  state = { show: false }

  showModal = () => {
    this.setState({ show: true });
  }

  hideModal = () => {
    this.setState({ show: false });
  }

  render() {
    return(
      <main className="center-button">
       <BookingForm show={this.state.show} handleClose={this.hideModal} handleNewBooking={this.props.handleNewBooking}/>
       <div >
          <button type="button" className="myButton new-booking" onClick={this.showModal} >Book a Visit</button>
       </div>
      </main>
    )
  }
}
