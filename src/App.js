import React, { Component } from 'react';
import LandingPage from './components/LandingPage';
import Menu from './components/Menu';
import Footer from './components/Footer';
import './styles/styles.scss';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Menu />
          <LandingPage />
          <Footer />
        </div>
    );
  }
}

export default App;
