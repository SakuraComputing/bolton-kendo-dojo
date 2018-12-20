import React from 'react'
import { shallow } from 'enzyme';
import MemberPhotoItem from '../../../components/members/MemberPhotoItem';

describe('Member Photo Item', () => {

    let photo, showModal;

    beforeEach(() => {
        const onUploadDelete = jest.fn();
        showModal = { show: jest.fn() };
        photo = shallow(<MemberPhotoItem onUploadDelete={onUploadDelete} showModal={showModal}/>)
    })
    it('should render correctly', () => {
        expect(photo).toMatchSnapshot();
    });
    it('should initialise present in `state`', () => {
        expect(photo.state()).toEqual({
            show: false,
        });
    });
    it('should update showmodal', () => {
        photo.find('button').at(0).simulate('click');
        expect(photo.state().show).toBe(true);
    });
});