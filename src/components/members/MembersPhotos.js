import React from 'react';
import axios from 'axios';

class MemberPhoto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            images: []
        };
    };

    componentDidMount() {
        axios.get('/api/uploads/all')
        .then(res => {
            this.setState( { images: res.data });
        })
        .catch(err => console.log(err))
    }

    render() {

        let album;

        const { images } = this.state;

        if(images) {
            console.log(this.state);
            album = images.map(image => (
                <div className="image-frame" key={image._id}>
                    <img className="image-item" src={`uploads/${image.filename}`} alt="photoU" />
                    {image.description}
                    <button>Delete Photo</button>
                </div>    
            ))
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
export default MemberPhoto;
