import React from 'react';
import { shallow } from 'enzyme';
import { Members } from '../../../components/members/Members.js';

describe('Members Page', () => {
    it('should render correctly', () => {
        const auth = { user: jest.fn }
        const members = shallow(<Members auth={auth} />)
        expect(members).toMatchSnapshot();
    })
})



