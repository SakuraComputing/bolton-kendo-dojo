import React from 'react';
// import axios from 'axios';

class MemberPhoto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            img: ''
        };
    };

    arrayBufferToBase64(buffer) {
        var binary = '';
        var bytes = [].slice.call(new Uint8Array(buffer));
        bytes.forEach((b) => binary += String.fromCharCode(b));
        return window.btoa(binary);
    };

    componentDidMount() {
        fetch('/api/uploads/all')
        .then((res) => console.log(res))
        // .then((data) => {
        //     const base64Flag = 'data:image/jpeg;base64,';
        //     const imageStr = this.arrayBufferToBase64(data.img.data.data);
        //     this.setState({
        //         img: base64Flag + imageStr
        //     })
        // })
        .catch(err => console.log(err));
    }


    render() {

        const {img} = this.state;

        return (
            <div>
                <h1>Member Photograph Upload</h1>
                <form action="/upload">
                    <input type="file" name="sampleFile" id="file"/>
                    <label htmlFor="file">Choose File</label>
                    <input type="submit" value="Submit" className="btn"/>
                </form>
                <img src={img} alt="test"/>
            </div>
        )
    }
}
export default MemberPhoto;
