import { SET_PHOTO_FILTER_TEXT, SORT_PHOTO_BY_DATE } from './types';

export const setPhotoTextFilter = (photoText = '') => ({
    type: SET_PHOTO_FILTER_TEXT,
    photoText
});

export const setPhotoDateSortOrder = () => ({
    type: SORT_PHOTO_BY_DATE
})

