import React from 'react';
import { shallow } from 'enzyme';
import { VideoPage } from '../../components/VideoPage';

describe('Video Page Component', () => {

    let videoPage;

    beforeEach(() => {
        videoPage = shallow(<VideoPage />)
    });
    it('should render correctly', () => {
        expect(videoPage).toMatchSnapshot();
    });
});