import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import { getMemberUploads, postMemberUploads } from '../../actions/uploadActions';

export class MemberPhoto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {},
            file: null,
            description: ''
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

    render() {

        let album;

        const { uploads, loading } = this.props.uploads;

        if(uploads === null || uploads === undefined || loading) {
            album = <Spinner />
        } else {
            if(uploads.length > 0) {
                album = uploads.map(image => (
                    <div className="image-frame" key={image._id}>
                        <img className="image-item" src={`uploads/${image.filename}`} alt="photoU" />
                        {image.description}
                        <button>Delete Photo</button>
                    </div>    
                ))
            } else {
                album = <h4>No uploads found....</h4>
            }
        }
        
        return (
            <div className="images-uploads content-container">
                <h1 className="image-title">Member Photograph Upload</h1>

                <div className="image-header">
                    <form onSubmit={this.onFormSubmit}>
                        <input type="file" name="image" id="file" onChange={this.onChange} />
                        <label htmlFor="file">Choose File</label>
                        <input type="submit" value="Submit" className="btn"/>
                        <label htmlFor="description" >Add Photo Description</label>
                        <input type="text" name="description" onChange={this.onDescriptionChange}/>
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
export default connect(mapStateToProps, { getMemberUploads , postMemberUploads })(MemberPhoto);
