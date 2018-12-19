import moment from 'moment';

export default (uploads, { photoText, photoTitle, photoSortBy, startDate, endDate }) => {

    if(uploads.length > 0) {
        return {
            uploads: uploads.filter((upload) => {
            const dateCreated = moment(upload.date);
            const photoTextMatch = upload.description.toLowerCase().includes( photoText.toLowerCase() );
            const photoTitleMatch = upload.title.toLowerCase().includes( photoTitle.toLowerCase() );
            const startDateMatch = startDate ? startDate.isSameOrBefore(dateCreated, 'day') : true;
            const endDateMatch = endDate ? endDate.isSameOrAfter(dateCreated, 'day') : true;
            return photoTextMatch && photoTitleMatch && startDateMatch && endDateMatch;
        }),
            loading: false 
        }
    } else {
        return uploads
    }
}