import request from 'superagent'

// const CALENDAR_ID = require('../../config/keys').calendarId;
// const API_KEY = require('../../config/keys').apiCalendarKey;

require('dotenv').config()

const CALENDAR_ID = process.env.REACT_APP_CALENDAR_ID;
const API_KEY = process.env.REACT_APP_API_CALENDAR_ID;

let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`

function getEvents (callback) {
  request
    .get(url)
    .end((err, resp) => {
      if (!err) {
        const events = []
        JSON.parse(resp.text).items.map((event) => {
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
export default getEvents;