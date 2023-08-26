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
              <div>Church Road</div>
              <div>Bolton</div>
              <div>BL3 1BT</div>
              <div>Tel: 01204 334177</div>
            </div>
            <div className="about-section">
              <h2>Practice Times</h2>
              <div>Sunday: 10-12am</div>
              <div>Parking: Outside free better in the overflow car park</div>
            </div>
            <div className="about-section">
              <h2>Contact</h2>
              <div>Dojo Leader: Mark Needham (5th Dan)</div>
              <div>Tel: 01204 778587</div>
              <span>
                email:
                <a href="mailto:markneedham1954@btinternet.com">
                  markneedham1954@btinternet.com
                </a>
              </span>
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
