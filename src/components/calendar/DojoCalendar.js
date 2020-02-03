import React from 'react';
import moment from 'moment';
import request from 'superagent';

import { Calendar, momentLocalizer } from 'react-big-calendar'
// a localizer for BigCalendar
const localizer = momentLocalizer(moment)

// this weird syntax is just a shorthand way of specifying loaders
require('react-big-calendar/lib/css/react-big-calendar.css')

const CALENDAR_ID = require('../../config/keys').calendarId;
const API_KEY = require('../../config/keys').apiCalendarKey;

let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}&singleEvents=true`

export class DojoCalendar extends React.Component {
  constructor () {
    super()
      this.state = {
       events: []
      }
  }

  componentDidMount () {
    this.getEvents((events) => {
      this.setState({events})
    })
  }

  getEvents = (callback) => {
    request
      .get(url)
      .end((err, resp) => {
        if (!err) {
          const events = []
          JSON.parse(resp.text).items.forEach((event) => {
            events.push({
              start: event.start.date || event.start.dateTime,
              end: event.end.date || event.end.dateTime,
              title: event.summary,
            })
          })
          callback(events)
        } 
      })
  }
  
  render () {
    return (
      <Calendar
        localizer={localizer}
        events={this.state.events}
      />
    )
  }
}
export default DojoCalendar;