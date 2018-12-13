export default (uploads, { photoText, photoSortBy }) => {
    return uploads.filter((upload) => {
        const photoTextMatch = upload.description.toLowerCase().includes( photoText.toLowerCase() );
        return photoTextMatch;
    })
}