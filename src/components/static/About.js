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

    const { viewport } = this.state;

    const { club } = this.props.club;

    // const bollocks = club.address.map(alls => (
    //     <div>
    //         <div>{alls.clubName}</div>
    //     </div>
    // ));

    if(club === null)
        console.log('Props are', this.props.club.club[0].about);
    else 
        

    return (
        <div className="about-container">
            <div className="about-section" >
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
            <div className="about-section" >
                <h2>Practice Times</h2>
            </div>
            <div className="about-section" >
                <h2>Contact</h2>
            </div>
        </div>
    )
  }
}

const mapStateToProps = (state) => ({
    club: state.club
});

export default connect(mapStateToProps)(About);
