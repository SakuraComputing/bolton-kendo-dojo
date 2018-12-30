import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPosts } from '../../../actions/postActions';
import PostForm from './PostForm';

export class Posts extends Component {
  render() {

    const { posts, loading } = this.props.post;


    return (
      <div>
        <PostForm />
      </div>
    )
  }
}

const mapStateToProps = state => ({
    post: state.post
})
export default connect(mapStateToProps, { getPosts })(Posts);
