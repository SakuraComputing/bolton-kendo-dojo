import { SET_PHOTO_TEXT_FILTER, SORT_PHOTO_BY_DATE } from './types';

export const setPhotoTextFilter = (photoText = '') => ({
    type: SET_PHOTO_TEXT_FILTER,
    photoText
});

export const setPhotoDateSortOrder = () => ({
    type: SORT_PHOTO_BY_DATE
})

