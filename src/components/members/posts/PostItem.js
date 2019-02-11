import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from '../../../actions/postActions';

class PostItem extends Component {

    onDeleteClick = (id) => {
        this.props.deletePost(id);
    }

    render() {

        const { post, auth } = this.props;

        return (
            <div className="post-container">
                <div className="comment-outer">
                    <div className="comment-inner-1">
                        <a href="profile.html">
                            <img className="rounded-circle d-none d-md-block"
                                    src={post.avatar} alt=""/>
                        </a>
                        <br/>
                        <p className="avatar-name">{post.name}</p>
                        <br/>
                        <Link to={`/post/${post._id}`} className="item-comments button-small">
                            Comments
                        </Link>
                    </div>

                    <div className="comment-inner-2">
                        <p className="comment-text">{post.text}</p>
                    </div>
                    {/* {post.user === auth.user.id ? ( */}
                    <div className="comment-inner-3">
                        {post.user === auth.user.id ? (
                            <button 
                                onClick={this.onDeleteClick.bind(this, post._id)}
                                type="button"
                                className="button-delete button-small item-delete"
                            >
                            Delete Post
                            </button>

                        ) : null}   
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
};

export default connect(mapStateToProps, { deletePost } )(PostItem);
