import React from 'react';
import { shallow } from 'enzyme';
import About from '../../../components/static/About.js';

describe('About Bolton Kendo Dojo', () => {

    let about;

    beforeEach(() => {
        about = shallow(<About />);
    })
    it('should render correctly', () => {
        expect(about).toMatchSnapshot();
    });
})
