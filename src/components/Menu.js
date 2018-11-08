import React from 'react'
import { Link } from 'react-router-dom';


const Menu = () => {
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
                <Link to="/study">Kendo Study</Link>
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
            <li>
                <Link to="/login">Login / Registration</Link>
            </li>
        </ul>
    </div>
  )
}
export default Menu;
