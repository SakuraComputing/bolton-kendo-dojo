import React from 'react'
import { shallow } from 'enzyme';
import { MemberPhoto } from '../../../components/members/MembersPhotos';
import uploads from '../../fixtures/uploads';

describe('Member Photos', () => {
    
    let photo, getMemberUploads;

    beforeEach(() => {
        getMemberUploads = jest.fn()
        photo = shallow(<MemberPhoto getMemberUploads={getMemberUploads} uploads={uploads}/>)
    });

    it('should render correctly', () => {
        expect(photo).toMatchSnapshot();
    });
    
});