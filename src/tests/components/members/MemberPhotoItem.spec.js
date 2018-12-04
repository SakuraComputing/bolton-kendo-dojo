import React from 'react'
import { shallow } from 'enzyme';
import MemberPhotoItem from '../../../components/members/MemberPhotoItem';

describe('Member Photo Item', () => {
    it('should render correctly', () => {
        const onUploadDelete = jest.fn();
        const photo = shallow(<MemberPhotoItem onUploadDelete={onUploadDelete}/>)
        expect(photo).toMatchSnapshot();
    });
});