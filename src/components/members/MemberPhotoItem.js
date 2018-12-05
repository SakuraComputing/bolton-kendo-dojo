import React from 'react';

const MemberPhotoItem = (props) => {
    return (
        <div className="image-frame">
            <img className="image-item" src={`uploads/${props.filename}`} alt="photoU" />
            <div>
                {props.description}
            </div>
            <button onClick={props.onUploadDelete} className="button-small">Delete Photo</button>
        </div>
    );
}

export default MemberPhotoItem;
