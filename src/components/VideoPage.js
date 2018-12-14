import React, { Component } from 'react';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
// import ReactPlayer from 'react-player';

export class VideoPage extends Component {

    render() {

        let video;

        const { club, loading } = this.props.club;
        
        if(club !== null && !loading) {
            video = club[0].videos.map(((video, key) => 
                <div key={key}>{video.videoId}</div>
            ))
        } else {
            video = <Spinner />
        }

        return (
            <div className="content-container">
                {video}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    club: state.club
})
export default connect(mapStateToProps, null)(VideoPage);
