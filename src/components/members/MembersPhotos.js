import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import { getMemberUploads, postMemberUploads, deleteMemberUploads } from '../../actions/uploadActions';
import MemberPhotoItem from '../../components/members/MemberPhotoItem';
import { confirmAlert } from 'react-confirm-alert'; 
import MemberPhotoFilter from './MembersPhotoFilter';
import selectPhotos from '../../selectors/photos';

export class MemberPhoto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            description: '',
            errors: {},
            uploads: []
        };
    };

    componentDidMount() {
        this.props.getMemberUploads();
    }

    onChange = (e) => {
        this.setState({ file: e.target.files[0] })  
    };

    onDescriptionChange = (e) => {
        this.setState({ description: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const { file, description } = this.state; 

        let formData = new FormData();
        formData.append('image', file);
        formData.set('description', description);
        this.props.postMemberUploads(formData);
        this.setState({
            file: null,
            description: '',
            errors: {}
        })
    }

    onUploadDelete = (index, e) => {
        confirmAlert({
            title: "Confirm Delete",
            message:"Are you sure you want to delete this?",
            buttons: [
                {
                    label: 'Confirm',
                    onClick: () => {
                        const photoId = this.props.uploads.uploads[index]._id;
                        this.props.deleteMemberUploads(photoId);    
                    }
                },
                {
                    label: 'Cancel',
                    onClick: () => {}
                }
            ]
        })
    }

    render() {

        let album;

        const { uploads, loading } = this.props.uploads;

        if(uploads === null || uploads === undefined || loading) {
            album = <Spinner />
        } else {
            if(uploads.length > 0) {
                album = uploads.map(((image, key) => {
                    return <MemberPhotoItem 
                            key={image._id}
                            filename={image.filename}
                            description={image.description}
                            onUploadDelete={this.onUploadDelete.bind(this, key)}
                        />
                }))
            } else {
                album = <h4>No uploads found....</h4>
            }
        }
        
        return (
            <div>
                <div className="images-uploads content-container">
                    <h1 className="image-title">Member Photographs</h1>
                        <MemberPhotoFilter />
                        <div className="wrap-collapsible">
                            <input id="collapsible" className="toggle" type="checkbox"/>
                            <label htmlFor="collapsible" className="lbl-toggle">Uploads</label>
                            <div className="collapsible-content">
                                <div className="content-inner">
                                    <form onSubmit={this.onFormSubmit} className="image-header">
                                        <div className="image-header-container">
                                            <label htmlFor="upload-file" className="upload-file button-small">Get Photo</label>
                                            <input type="file" accept=".jpg,.jpeg,.png,.bmp,.gif" name="image" id="upload-file" onChange={this.onChange} />
                                        </div>
                                        <div className="image-header-container">
                                            <textarea rows="2" col="3" value={this.state.description} className="upload-text input-box" type="text" name="description" onChange={this.onDescriptionChange}/>
                                            <label className="upload-label" htmlFor="description" >Add Photo Description</label>
                                        </div>
                                        <div className="image-header-container">
                                            <label className="upload-label" htmlFor="submit">Upload Photo</label>
                                            <input type="submit" value="Submit" name="submit" className="button-small"/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        <div className="image-container">
                            {album}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        uploads: selectPhotos(state.uploads.uploads, state.filters)
    }
};
export default connect(mapStateToProps, { getMemberUploads , postMemberUploads, deleteMemberUploads })(MemberPhoto);
