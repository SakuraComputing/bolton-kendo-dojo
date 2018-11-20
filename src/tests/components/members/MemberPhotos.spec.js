import React from 'react'
import { shallow } from 'enzyme';
import MemberPhotos from '../../../components/members/MembersPhotos';

describe('Member Photos', () => {
    
    let photo;

    beforeEach(() => {
        photo = shallow(<MemberPhotos />)
    });

    it('should render correctly', () => {
        expect(photo).toMatchSnapshot();
    });
    
});