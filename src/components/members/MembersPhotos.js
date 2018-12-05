import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import { getMemberUploads, postMemberUploads, deleteMemberUploads } from '../../actions/uploadActions';
import MemberPhotoItem from '../../components/members/MemberPhotoItem';

export class MemberPhoto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            description: '',
            errors: {}
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
    }

    onUploadDelete = (index, e) => {
        const photoId = this.props.uploads.uploads[index]._id;
        this.props.deleteMemberUploads(photoId);
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
            <div className="images-uploads content-container">
                <h1 className="image-title">Member Photograph Upload</h1>

                <div className="image-header">
                    <form onSubmit={this.onFormSubmit}>
                        <input type="file" className="upload-file" accept=".jpg,.jpeg,.png" name="image" id="file" onChange={this.onChange} />
                        <label className="upload-label" htmlFor="file">Upload Photo</label>
                        <input type="submit" value="Submit" className="button-small"/>
                        <label className="upload-label" htmlFor="description" >Add Photo Description</label>
                        <input className="upload-text input-box" type="text" name="description" onChange={this.onDescriptionChange}/>
                    </form>
                </div>
                
                <div className="image-container">
                    {album}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    errors: state.errors,
    uploads: state.uploads
})
export default connect(mapStateToProps, { getMemberUploads , postMemberUploads, deleteMemberUploads })(MemberPhoto);
