import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextAreaFieldGroup from '../../../common/TextAreaFieldGroup';
import { addPost } from '../../../actions/postActions';

export class PostForm extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: '',
            errors: {}
        }
    }

    onChange = (e) => {
        this.setState({ text: e.target.value })
    }
    
    render() {

        const { errors } = this.state;

        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                                <TextAreaFieldGroup
                                    className="post-text"
                                    placeholder="Create a post"
                                    name="text"
                                    value={this.state.text}
                                    onChange={this.onChange}
                                    error={errors.text}
                                />
                            </div>
                    <button type="submit" className="post-submit">
                        Submit
                    </button>                
                </form>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, { addPost })(PostForm);
