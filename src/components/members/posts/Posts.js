import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../../actions/postActions';
import PostForm from './PostForm';
import Spinner from '../../../common/Spinner';
import PostFeed from './PostFeed';

export class Posts extends Component {

  componentDidMount() {
      this.props.getPosts();
  }
  
  render() {

    const { posts, loading } = this.props.post;

    let postContent;

    if(posts == null || posts === undefined || loading) {
        postContent = <Spinner />
    } else {
        postContent = <PostFeed posts={posts} />
    }

    return (
      <div>
        <PostForm />
        {postContent}
      </div>
    )
  }
}

const mapStateToProps = state => ({
    post: state.post
})
export default connect(mapStateToProps, { getPosts })(Posts);
