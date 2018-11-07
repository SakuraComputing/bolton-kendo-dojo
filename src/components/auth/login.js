import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../../common/TextFieldGroup';

class Login extends Component {

  state = {
      email: '',
      password: '',
      errors: {}
  }

  onChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
  };


  render() {

    const { errors } = this.state;

    return (
      <div>
        <div className="login">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <h1 className="display-4 text-center">Log In</h1>
                        <p className="lead text-center">Sign in to your DevConnector account</p>
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
                                error={errors.email}
                            />
                            <input
                                type="submit"
                                className="btn btn-info btn-block mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
export default Login;
