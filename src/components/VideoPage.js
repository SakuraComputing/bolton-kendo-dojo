import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';

export class VideoPage extends Component {

    render() {

        let video;

        const { club, loading } = this.props.club;
        
        if(club !== null && !loading) {
            video = club[0].videos.map(((video, key) => 
                <div className="player-wrapper">
                    <ReactPlayer
                        key={key}
                        className="react-player"
                        width="100%"
                        height="100%"
                        url={`https://www.youtube.com/watch?v=${video.videoId}`}
                        controls={true}
                    />
                </div>
            ))
        } else {
            video = <Spinner />
        }

        return (
            <div className="video-page">
                <div className="">
                    {video}
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    club: state.club
})
export default connect(mapStateToProps, null)(VideoPage);
