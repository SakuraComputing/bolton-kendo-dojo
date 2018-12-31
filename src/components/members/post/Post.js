import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPost } from '../../../actions/postActions';

export class Post extends Component {
    render() {

        
        return (
            <div>
                
            </div>
        )
    }
}
const mapStateToProps = state => ({
    post: state.post
})
export default connect(mapStateToProps, { getPost })(Post);
