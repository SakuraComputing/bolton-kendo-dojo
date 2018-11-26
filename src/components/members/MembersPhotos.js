import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../../common/Spinner';
import { getMemberUploads } from '../../actions/uploadActions';

export class MemberPhoto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        };
    };

    componentDidMount() {
        this.props.getMemberUploads();
    }

    render() {

        let album;

        const { uploads, loading } = this.props.uploads;

        if(uploads === null || uploads === undefined || loading) {
            album = <Spinner />
        } else {
            console.log(this.props);
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
                    <form action="/upload">
                        <input type="file" name="sampleFile" id="file"/>
                        <label htmlFor="file">Choose File</label>
                        <input type="submit" value="Submit" className="btn"/>
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
export default connect(mapStateToProps, { getMemberUploads })(MemberPhoto);
