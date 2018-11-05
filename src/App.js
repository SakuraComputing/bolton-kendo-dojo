import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import './styles/styles.scss';
import Menu from './components/Menu';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Menu />
          <LandingPage />
        </div>
      </Router>
    );
  }
}

export default App;
