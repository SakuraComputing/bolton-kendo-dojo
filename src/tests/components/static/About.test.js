import React from 'react';
import { shallow } from 'enzyme';
import About from '../../../components/static/About.js';

describe('About Bolton Kendo Dojo', () => {
    it('should render correctly', () => {
        const about = shallow(<About />);
        expect(about).toMatchSnapshot();
    })
})
