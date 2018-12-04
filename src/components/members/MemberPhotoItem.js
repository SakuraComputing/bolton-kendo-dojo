import React from 'react';

const MemberPhotoItem = (props) => {
    return (
        <div>
            <img className="image-item" src={`uploads/${props.filename}`} alt="photoU" />
            <div>
                {props.description}
            </div>
            <button onClick={props.onUploadDelete} className="btn-delete">Delete Photo</button>
        </div>
    );
}

export default MemberPhotoItem;
