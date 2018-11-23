import React from 'react';

class MemberPhoto extends React.Component {
    render() {
        return (
            <div>
                <h1>Member Photograph Upload</h1>
                <form action="/upload">
                    <input type="file" name="sampleFile" id="file"/>
                    <label htmlFor="file">Choose File</label>
                    <input type="submit" value="Submit" className="btn"/>
                </form>
            </div>
        )
    }
}
export default MemberPhoto;
