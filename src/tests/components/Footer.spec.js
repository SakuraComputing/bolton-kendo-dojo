import { shallow } from 'enzyme';
import React from 'react';
import Footer from '../../components/Footer.js'

describe('Footer component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Footer />);
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});