import React from 'react';
import { shallow } from 'enzyme';
import Members from '../../components/Members.js';

describe('Members Page', () => {
    it('should render correctly', () => {
        const members = shallow(<Members />)
        expect(members).toMatchSnapshot();
    })
})



