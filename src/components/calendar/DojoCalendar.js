import React from 'react'
import moment from 'moment'
import getEvents from './jcal';

import { Calendar, momentLocalizer } from 'react-big-calendar'
// a localizer for BigCalendar
const localizer = momentLocalizer(moment)

// this weird syntax is just a shorthand way of specifying loaders
require('react-big-calendar/lib/css/react-big-calendar.css')

class DojoCalendar extends React.Component {
  constructor () {
    super()
      this.state = {
       events: []
      }
  }

  componentDidMount () {
    getEvents((events) => {
      this.setState({events})
    })
  }

  render () {
    return (
      // React Components in JSX look like HTML tags
      <Calendar
        localizer={localizer}
        events={this.state.events}
        // style={{height: '420px'}}
      />
    )
  }
}
export default DojoCalendar;