import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../../actions/postActions';

export class CommentItem extends Component {

    onDeleteClick(postId, commentId) {
        this.props.deleteComment(postId, commentId);
    }

    render() {
        const { comment, postId, auth } = this.props;

        return(
            <div className="post-container">
                <div className="comment-outer">
                    <div className="comment-inner-1">
                        <a href="profile.html">
                            <img className="rounded-circle d-none d-md-block"
                                    src={comment.avatar} alt=""/>
                        </a>
                        <br/>
                        <p className="avatar-name">{comment.name}</p>
                        <div className="comment-container">
                        </div>
                    </div>
                    <div className="comment-inner-2">
                        <p className="comment-text">{comment.text}</p>
                    </div>
                    <div className="comment-inner-3">
                        {comment.user === auth.user.id ? (
                            <button onClick={this.onDeleteClick.bind(this, postId, comment._id)}
                                    type="button"
                                    className="button-small button-delete item-delete"
                            >
                            <i className="fas fa-times"></i>
                            Delete Comment
                            </button>
                        ) : null}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});
 
export default connect(mapStateToProps, {deleteComment})(CommentItem);
