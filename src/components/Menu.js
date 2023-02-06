import React from 'react';
import { Link } from 'react-router-dom';

export class Menu extends React.Component {
  render() {
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
            <Link to="/calendar">Calendar</Link>
          </li>
          <li>
            <Link to="/theory">What is Kendo</Link>
          </li>
          <li>
            <Link to="/links">Kendo Links</Link>
          </li>
        </ul>
      </div>
    );
  }
}
export default Menu;
