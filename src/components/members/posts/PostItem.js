import React, { Component } from 'react';
import { connect } from 'react-redux';


export class PostItem extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth
});

export default connect(mapStateToProps)(PostItem);
