import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export class Menu extends React.Component {

  render() { 

        const { isAuthenticated } = this.props.auth;

        const authLinks = (
            <ul className="nav">
                <li>
                    <Link to="/study">Kendo Study</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        )

        const guestLinks = (
            <li>
                <Link to="/login">Login / Registration</Link>
            </li>
        )

        return (
            <div>
                <ul className="nav">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">Where and When</Link>
                    </li>
                    <li>
                        <Link to="/history">Club History</Link>
                    </li>
                    <li>
                        <Link to="/theory">What is Kendo</Link>
                    </li>
                    <li>
                        <Link to="/links">Kendo Links</Link>
                    </li>
                    <li>
                        <Link to="/photos">Kendo Photograph's</Link>
                    </li>
                    <li>
                        <Link to="/videos">Kendo Videos</Link>
                    </li>
                    {isAuthenticated ? authLinks :  guestLinks}
                </ul>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    auth: state.auth
})
export default connect(mapStateToProps, )(Menu);
