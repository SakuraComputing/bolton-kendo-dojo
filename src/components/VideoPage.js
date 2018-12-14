import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ReactPlayer from 'react-player';

export class VideoPage extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = state => ({
    club: state.club
})
export default connect(mapStateToProps, null)(VideoPage);
