import React from 'react';
import Login from '../../../components/auth/login';
import { shallow } from 'enzyme';


describe('Login Form', () => {

    it('should render correctly', () => {
        const wrapper = shallow(<Login />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should set the state on change', () => {
        const email = 'sidsnot@gmail.com';
        const wrapper = shallow(<Login />);
        wrapper.find('TextFieldGroup').at(0).simulate('change', {
            target: { value: 'Change Function' }
        });
        console.log(wrapper.state);
        expect(wrapper).toMatchSnapshot();
    });
});