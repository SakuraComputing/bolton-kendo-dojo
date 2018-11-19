import React from 'react';
import { connect } from 'react-redux';
import Map, { Marker } from 'react-map-gl';
import Pin from '../../common/Pin';

const key = require('../../config/keys').apiMapKey;

const API_KEY = key;

const LATITUDE = 53.562614;
const LONGITUDE = -2.384833;

export class About extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        viewport: {
            latitude: LATITUDE,
            longitude: LONGITUDE,
            zoom: 14,
            bearing: 0,
            pitch: 0,
            width: '100%',
            height: 400,
        }
    };
  }

  render() {

    let clubContent, practises;

    const { viewport } = this.state;

    const { club } = this.props.club;

    if(club.length > 0) {
        practises = club[0].practices.map(practise => (
            <div key={key}>
                <div>Venue: {practise.venue}</div>
                <div>Times: {practise.time}</div>
            </div>
        ));
        clubContent = (
            <div>
                <div className="about-section">
                    <h2>Practice Times</h2>
                    {practises}
                </div>
                <div className="about-section" >
                    <h2>Contact</h2>
                    <div>Name: {club[0].contacts[0].name}</div>
                    <div>Contact Number: {club[0].contacts[0].telephoneNumber}</div>
                    <div>Email: {club[0].contacts[0].email}</div>
                </div>
            </div>
        )
    } else {
        // TODO: Display Spinner

    }
        

    return (
        <div className="about-container">
            <div className="about-map-section" >
                <h2 className="about-header">Where we practice</h2>
                <div className="about-map">
                    <Map
                        {...viewport}
                        mapStyle="mapbox://styles/mapbox/streets-v10"
                        mapboxApiAccessToken={API_KEY}>
                        <Marker 
                            latitude={LATITUDE} 
                            longitude={LONGITUDE}
                        >
                            <Pin />       
                        </Marker>
                    </Map>
                    
                </div>
            </div>
            {clubContent}
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    club: state.club
});

export default connect(mapStateToProps)(About);
