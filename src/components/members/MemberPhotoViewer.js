import React from 'react'

const MemberPhotoViewer = ({ handleClose, show, children }) => {

    const showHideClassName = show ? "photo-viewer display-block" : "photo-viewer display-none";


    return (
        <div className={showHideClassName}>
            <section className="photo-viewer-main">
                <h1 className="photo-title">Photo Viewer</h1>
                <div>
                    {children}
                </div>
                <button className="button-small" onClick={handleClose}>close</button>
            </section>
        </div>
    )
}

export default MemberPhotoViewer
