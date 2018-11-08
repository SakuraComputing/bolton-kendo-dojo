import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginUser } from '../../actions/authActions';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../common/TextFieldGroup';

export class Login extends Component {

    constructor() {
        super();
        this.state = {
             email: '',
            password: '',
            errors: {}
        }
    }
    
    componentWillReceiveProps(nextProps) {
        console.log('Component Will Mount', nextProps);
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData);
    }

    render() {

    const { errors } = this.state;

    return (
      <div>
        <div className="login">
            <div className="content-container">
                <h1 className="form-title">Log In</h1>
                <p className="form-text">Sign in to the Members Area</p>
                <form onSubmit={this.onSubmit}>
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
                    <input
                        type="submit"
                        className="button button-info"
                    />
                </form>
                <div className="login-request">
                    <Link to="/register">New - Click here to request membership</Link>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
   auth: state.auth,
   errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
