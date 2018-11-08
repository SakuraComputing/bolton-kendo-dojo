import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../../common/TextFieldGroup';
import { registerUser } from '../../actions/authActions';

export class Register extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        password2: '',
        errors: {}
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };

    onSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };
        this.props.registerUser(newUser, this.props.history);
    };

    render() {
        const { errors } = this.state;
        return (
            <div className="register">
                <div className="container">
                    <h1 className="form-title">Sign Up</h1>
                    <p className="form-text">Create your Members Account</p>
                    <form noValidate onSubmit={this.onSubmit}>
                        <TextFieldGroup
                            placeholder="Name"
                            name="name"
                            value={this.state.name}
                            type="name"
                            onChange={this.onChange}
                            error={errors.name}
                        />
                        <TextFieldGroup
                            placeholder="Email Address"
                            name="email"
                            value={this.state.email}
                            type="email"
                            onChange={this.onChange}
                            error={errors.email}
                        />
                        <TextFieldGroup
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            type="password"
                            onChange={this.onChange}
                            error={errors.password}
                        />
                        <TextFieldGroup
                            placeholder="Confirm Password"
                            name="password2"
                            value={this.state.password2}
                            type="password"
                            onChange={this.onChange}
                            error={errors.password2}
                        />

                        <input type="submit" className="button button-info"/>
                    </form>
                </div>
            </div>
        );
    }
}

Register.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
