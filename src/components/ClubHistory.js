import React from 'react'
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';

export class ClubHistory extends React.Component {

  render() {

    let clubHistory, clubAbout;

    const { club, loading } = this.props.club;

    if(club !== null && !loading) {
      clubHistory = <div>{club[0].clubHistory}</div>

      clubAbout = <div>{club[0].about}</div>
      
    } else {
      clubHistory = <Spinner />
    }

    return (
      <div className="content-container">
        <h1>Club History</h1>
        {clubHistory}
        <h1>K.N.M.S - Wilf Swindell's Sensei</h1>
        {clubAbout}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  club: state.club
})
export default connect(mapStateToProps)(ClubHistory);
