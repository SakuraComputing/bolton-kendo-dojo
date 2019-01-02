import React, { Component } from 'react';
import CommentItem from './CommentItem';

class commentFeed extends Component {
    render() {
        const {comments, postId} = this.props;

        return comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={postId}/>
        ))
    }
}
export default commentFeed;
