import moment from 'moment';

export default [
    {
        "_id": "5bfed7528032901512c0f933",
        "date": 0,
        "filename": "image-1543168184113.png",
        "title": "Title1",
        "description": "Kendo Photo Details",
    },
    {
        "_id": "5bfed7528036661512c0f933",
        "date": moment(0).subtract(4, 'days').valueOf(),
        "filename": "image-0000000000.png",
        "title": "Title2",
        "description": "More Details",
    },
    {
        "_id": "5bfed7528032901512c05rtd",
        "date": moment(0).add(4, 'years').valueOf(),
        "filename": "image-3333333333.png",
        "title": "Title3",
        "description": "Extra Details",
    }
]