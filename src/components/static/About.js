import React from 'react';
import Map, { NavigationControl, Marker } from 'react-map-gl';

const API_KEY = 'pk.eyJ1IjoiZXdhbmJkIiwiYSI6ImNqb2ozcnEycDAxMjkza3BhbjVpMWd0azUifQ.gRjILY0KoVrvFBY_Hvkv2w';

const navStyle = {
    top: 0,
    left: 0,
    padding: '10px'
};

const LATITUDE = 53.562614;
const LONGITUDE = -2.384833;

class About extends React.Component {

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

    return (
        <div className="about-container">
            <div className="about-section" >
                <div className="about-map">
                    <Map
                        {...viewport}
                        mapStyle="mapbox://styles/mapbox/streets-v10"
                        mapboxApiAccessToken={API_KEY}>
                        <Marker latitude={LATITUDE} longitude={LONGITUDE}>
                            <div>You are Here</div>
                        </Marker>
                    </Map>
                    
                </div>
            </div>
        </div>
    )
  }
}
export default About;
