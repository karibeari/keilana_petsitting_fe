import React, { Component } from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './BookingCalendar.css'
import NewBookingButton from './NewBookingButton'


const localizer = BigCalendar.momentLocalizer(moment)

class BookingCalendar extends Component {

  setDates = () => {
    const events = []
    this.props.events.map(event => {
       return events.push({
        start: new Date(event.start),
        end: new Date(event.end),
        title: `${event.pet_name} Stay (Human: ${event.human_name})`,
        allDay: true
      })
    })
    return events
  }

  render() {
    return(
      <div className="calendar-container">
        <h1 className="calendar-header">When is Keilana available?</h1>
        <NewBookingButton className="center" handleNewBooking={this.props.handleNewBooking}/>
        <h2>NOTE: Please contact Keilana to confirm booking.</h2>
        <h2>keilanaferenczy@gmail.com | 310-502-8143</h2>
        <div className="calendar">
          <BigCalendar
            localizer={localizer}
            events={this.setDates()}
            startAccessor="start"
            endAccessor="end"
          />
        </div>
      </div>
    )
  }
}

export default BookingCalendar
