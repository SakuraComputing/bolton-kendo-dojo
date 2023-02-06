import React from 'react';

export class About extends React.Component {
  render() {
    console.log('Club Details', this.props.club);

    const clubContent = (
      <div>
        <div className="about-map-section">
          <div className="about-header">
            <div className="about-section">
              <h2>Where we practice</h2>
              <div>Little Lever School</div>
              <div>Bolton</div>
              <div>BL3 1BT</div>
            </div>
            <div className="about-section">
              <h2>Practice Times</h2>
              <div>Sunday 10am</div>
            </div>
            <div className="about-section">
              <h2>Contact</h2>
              <div>Mark Needham</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );

    return <div className="about-container">{clubContent}</div>;
  }
}

export default About;
