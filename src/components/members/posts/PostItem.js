import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { className } from '../../../../node_modules/postcss-selector-parser';

export class PostItem extends Component {
    render() {

        const { post, auth } = this.props;

        return (
            <div>
                <div>
                    <p>{post.name}</p>
                </div>
                <div>
                    <p>{post.text}</p>
                    <Link to={`/post/${post._id}`} className="item-comments">
                        Comments
                    </Link>
                    <button 
                        type="button"
                        className="item-delete"
                    >
                    </button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PostItem);
