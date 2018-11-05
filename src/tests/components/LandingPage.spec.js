import { shallow } from 'enzyme';
import React from 'react';
import LandingPage from '../../components/LandingPage.js'

describe('landing page component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<LandingPage />);
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should display h1 text', () => {
        const headerText = wrapper.find('h1').text();
        expect(headerText).toEqual('Bolton Kendo Club');
    });
    it('should display paragraph text', () => {
        const headerText = wrapper.find('p').text();
        expect(headerText).toEqual('Welcome to KNMS / Doshinkenyukai');
    });
});