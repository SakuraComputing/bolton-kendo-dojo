export default (uploads, { photoText, photoTitle, photoSortBy }) => {

    if(uploads.length > 0) {
        return {
            uploads: uploads.filter((upload) => {
            const photoTextMatch = upload.description.toLowerCase().includes( photoText.toLowerCase() );
            const photoTitleMatch = upload.title.toLowerCase().includes( photoTitle.toLowerCase() );
            return photoTextMatch && photoTitleMatch;
        }),
            loading: false 
        }
    } else {
        return uploads
    }
}