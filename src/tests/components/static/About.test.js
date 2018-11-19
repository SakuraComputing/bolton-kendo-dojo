import React from 'react';
import { shallow } from 'enzyme';
import { About } from '../../../components/static/About.js';

describe('About Bolton Kendo Dojo', () => {

    let about, club;

    beforeEach(() => {
        club = jest.fn();
        about = shallow(<About club={club}/>);
    })
    it('should render correctly', () => {
        expect(about).toMatchSnapshot();
    });
})
