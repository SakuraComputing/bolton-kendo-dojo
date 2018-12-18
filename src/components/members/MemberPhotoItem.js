import React, { Component } from 'react';
import MemberPhotoViewer from './MemberPhotoViewer';
import Moment from 'moment';

class MemberPhotoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            show: false
        }
    }

    showModal = () => {
        this.setState({
            show: true
        })
    }

    hideModal = () => {
        this.setState({
            show: false
        })
    }
    
    render() {

        return (
            <div className="image-frame">
                <img className="image-item" src={`uploads/${this.props.filename}`} alt="photoU" />
                <div>
                    Title: {this.props.title}
                </div>

                <MemberPhotoViewer 
                    show={this.state.show} 
                    handleClose={this.hideModal.bind(this)}
                >
                    <div>
                        <img className="image-item" src={`uploads/${this.props.filename}`} alt="photoU" />
                    </div>
                    <p>Title: {this.props.title}</p>
                    <p>Date Added: {Moment(this.props.date).format('Do MMMM YYYY')}</p>
                    <p>Description: {this.props.description}</p>
                    <p>Date Photo From: {Moment(this.props.eventDate).format('Do MMMM YYYY')}</p>
                </MemberPhotoViewer>
                <div className="button-end-container">
                    <button onClick={this.showModal} className="button-small photo-button">View Photo</button>
                    <button onClick={this.props.onUploadDelete} className="button-small photo-button">Delete Photo</button>
                </div>
            </div>
        );
    }

}

export default MemberPhotoItem;
