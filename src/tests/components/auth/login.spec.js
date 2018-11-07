import React from 'react';
import { Login } from '../../../components/auth/login';
import { shallow } from 'enzyme';

describe('Login Form', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Login />);
    })

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should set the state on change', () => {
        wrapper.find('TextFieldGroup').at(0).simulate('change', {
            target: { value: 'Change Function' }
        });
        expect(wrapper).toMatchSnapshot();
    });
    it('should call onSubmit the form',() => {
        const submitSpy = jest.fn();
        const entry = {
            email: 'e@s.com',
            password: 'trerrte'
        }
        wrapper.find('form').at(1).simulate('submit', {
            preventDefault: () => {}
        })
        expect(submitSpy).toHaveBeenCalledWith({
            email: entry.mail,
            password: entry.password
        });
    });
});