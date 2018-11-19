import React from 'react'
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';

export class ClubHistory extends React.Component {

  render() {

    let clubHistory;

    const { club, loading } = this.props.club;

    if(club !== null && !loading) {
      clubHistory = (
        <div>{club[0].clubHistory}</div>
      )
    } else {
      clubHistory = <Spinner />
    }

    return (
      <div>
        <h1>Club History</h1>
        {clubHistory}
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  club: state.club
})
export default connect(mapStateToProps)(ClubHistory);
