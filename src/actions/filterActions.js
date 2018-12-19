import { SET_PHOTO_FILTER_TEXT, SET_PHOTO_FILTER_TITLE, SORT_PHOTO_BY_DATE } from './types';

export const setPhotoTextFilter = (photoText = '') => ({
    type: SET_PHOTO_FILTER_TEXT,
    photoText
});

export const setPhotoFilterTitle = (photoTitle = '') => ({
    type: SET_PHOTO_FILTER_TITLE,
    photoTitle
})

export const setPhotoDateSortOrder = () => ({
    type: SORT_PHOTO_BY_DATE
})

