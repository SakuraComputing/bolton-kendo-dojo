import React from 'react';
import { shallow } from 'enzyme';
import { VideoPage } from '../../components/VideoPage';
import club from '../fixtures/club'; 

describe('Video Page Component', () => {

    let videoPage;

    beforeEach(() => {
        videoPage = shallow(<VideoPage club={{club}} />)
    });
    it('should render correctly', () => {
        expect(videoPage).toMatchSnapshot();
    });

    it('should not display a spinner when state loading is false', () => {
        const props = {
            club: {
                loading: false,
                club
            },
        }
        videoPage = shallow(<videoPage {...props} />)
        expect(videoPage.find('Spinner').length).toEqual(0);
    });

});