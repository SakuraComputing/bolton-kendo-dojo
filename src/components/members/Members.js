import React from 'react';
import { Link } from 'react-router-dom';

const  Members = () => {
  return (
    <div className="members">
      <h1 className="members-header">Welcome to the Members Area</h1>
      <div className="members-area-container">
        <div className="members-area-link">
          <Link to="/memberphoto">Photos</Link>
          <p>Select the photographs and upload these with text for other members to see.</p>
        </div>
        <div className="members-area-link">
          <Link to="/mindmap">Kendo Mind Map</Link>
          <p>Enter the Kendo Mind Map section for all deeper kendo study</p>
        </div>
        <div className="members-area-link">
          <Link to="/memberphoto">Videos</Link>
          <p>Go into the video section and view private members videos</p>
        </div>
        <div className="members-area-link">
          <Link to="/members">Bulletin Board</Link>
          <p>Add a post to the bulletin board. Respond to other posts</p>
        </div>
      </div>
    </div>
  )
}
export default Members;
