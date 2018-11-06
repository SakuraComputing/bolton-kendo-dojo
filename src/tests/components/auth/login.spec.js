import React from 'react';
import Login from '../../../components/auth/login';
import { shallow } from 'enzyme';


describe('Login Form', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });
});