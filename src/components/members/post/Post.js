import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPost } from '../../../actions/postActions';
import Spinner from '../../../common/Spinner';
import PostItem from '../posts/PostItem';
import CommentForm from './CommentForm';
import CommentFeed from './CommentFeed';

export class Post extends Component {

    componentDidMount() {
        this.props.getPost(this.props.match.params.id);
    }

    render() {
        const { post, loading } = this.props.post;

        let postContent;

        if(post === null || loading || Object.keys(post).length === 0) {
            postContent = <Spinner />
        } else {
            postContent = (
                <div>
                    <PostItem post={post} showActions={false}/>
                    <CommentForm postId={post._id}/>
                    <CommentFeed postId={post._id} comments={post.comments} />
                </div>
            )
        }
        
        return (
            <div>
                <div className="back-to-feed">
                    <Link to="/feed" className="button-small button-warning">
                        Back To Feed
                    </Link>
                </div>
                {postContent}
            </div>
        )
    }
}
const mapStateToProps = state => ({
    post: state.post
})
export default connect(mapStateToProps, { getPost })(Post);
