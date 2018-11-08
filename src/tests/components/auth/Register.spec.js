import React from 'react';
import { Register } from '../../../components/auth/Register';
import { shallow } from 'enzyme';

describe('Register Form', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Register />);
    })

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});