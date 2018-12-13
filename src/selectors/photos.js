export default (uploads, { photoText, photoSortBy }) => {

    if(uploads.length > 0) {
        return {
            uploads: uploads.filter((upload) => {
            const photoTextMatch = upload.description.toLowerCase().includes( photoText.toLowerCase() );
            return photoTextMatch;
        }),
            loading: false 
        }
    } else {
        return uploads
    }
}