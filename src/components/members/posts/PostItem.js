import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deletePost } from "../../../actions/postActions";

export class PostItem extends Component {

    onDeleteClick = (id) => {
        this.props.deletePost(id);
    }
    render() {

        const { post } = this.props;

        return (
            <div className="feed-container">
                <div>
                    <p>Posted By: {post.name}</p>
                </div>
                <div>
                    <p>{post.text}</p>
                    <Link to={`/post/${post._id}`} className="item-comments button-small">
                        Comments
                    </Link>
                    <button 
                        type="button"
                        className="button-delete button-small item-delete"
                        onClick={this.onDeleteClick.bind(this, post._id)}
                    >
                    Delete Post
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps, { deletePost })(PostItem);
