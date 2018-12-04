import React from 'react';

const MemberPhotoItem = (props) => {
    return (
        <div>
            <div className="image-frame" >
                <img className="image-item" src={`uploads/${props.filename}`} alt="photoU" />
                    {props.description}
                    <button onClick={props.onUploadDelete} className="btn-delete">Delete Photo</button>
            </div>
        </div>
    );
}

export default MemberPhotoItem;
