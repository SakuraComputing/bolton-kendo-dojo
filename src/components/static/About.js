import React from 'react';
import { connect } from 'react-redux';
import Map, { Marker } from 'react-map-gl';
import Pin from '../../common/Pin';
import Spinner from '../../common/Spinner';

const key = require('../../config/keys').apiMapKey;
const test = require('../../config/keys').mongoURI;

const API_KEY = key;

console.log('Map key', key, test);

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

    let clubContent, practises, contacts, address;

    const { viewport } = this.state;

    const { club, loading } = this.props.club;

    if(club !== null && !loading) {
        practises = club[0].practices.map(practise => (
            <div key={key}>
                <div>{practise.venue}</div>
                <div>{practise.time}</div>
            </div>
        ));
        contacts = club[0].contacts.map(contact => (
            <div key={key}>
                <div>{contact.name}</div>
                <div>{contact.telephoneNumber}</div>
                <div>{contact.email}</div>
            </div>
        ));
        address = club[0].addresses.map(address => (
            <div key={key}>
                <div>{address.address1}</div>
                <div>{address.address2}</div>
                <div>{address.address3}</div>
                <div>{address.address4}</div>
                <div>{address.postcode.slice(0,3) + " " + address.postcode.slice(3,6)}</div>
            </div>
        ));
        clubContent = (
            <div>
                <div className="about-map-section" >
                    <div className="about-header">
                        <div className="about-section">
                            <h2>Where we practice</h2>
                            {address}
                        </div>
                        <div className="about-section">
                            <h2>Practice Times</h2>
                            {practises}
                        </div>
                        <div className="about-section" >
                            <h2>Contact</h2>
                            {contacts}
                        </div>
                    </div>
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
                <div>
                </div>
            </div>
        )
    } else {
        clubContent = <Spinner />
    }
    
    return (
        <div className="about-container">
            {clubContent}
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    club: state.club
});

export default connect(mapStateToProps)(About);
