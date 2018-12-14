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
                    {this.props.description}
                </div>

                <MemberPhotoViewer 
                    show={this.state.show} 
                    handleClose={this.hideModal.bind(this)}
                >
                    <div>
                        <img className="image-item" src={`uploads/${this.props.filename}`} alt="photoU" />
                    </div>
                    <p>Date Added: {Moment(this.props.date).format('Do MMMM YYYY')}</p>
                    <p>{this.props.description}</p>
                </MemberPhotoViewer>
                <button onClick={this.showModal} className="button-small photo-button">View Photo</button>
                <button onClick={this.props.onUploadDelete} className="button-small photo-button">Delete Photo</button>
            </div>
        );
    }

}

export default MemberPhotoItem;
