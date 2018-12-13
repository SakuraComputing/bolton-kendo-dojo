import React from 'react'
import { shallow } from 'enzyme';
import MemberPhotoViewer from '../../../components/members/MemberPhotoViewer';

describe('Member Photo Viewer', () => {

    let viewer;

    beforeEach(() => {
        viewer = shallow(<MemberPhotoViewer />);
    });

    it('should redner correctly', () => {
        expect(viewer).toMatchSnapshot();
    });
});