import { SET_PHOTO_TEXT_FILTER, SORT_PHOTO_BY_DATE } from './types';

export const setPhotoTextFilter = (description = '') => ({
    type: SET_PHOTO_TEXT_FILTER,
    description
});

export const setPhotoDateSortOrder = () => ({
    type: SORT_PHOTO_BY_DATE
})

