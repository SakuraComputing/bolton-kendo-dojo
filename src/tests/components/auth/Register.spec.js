import React from 'react';
import { Register } from '../../../components/auth/Register';
import { shallow } from 'enzyme';

describe('Register Form', () => {

    let wrapper;

    beforeEach(() => {
        const registerUser = jest.fn();
        const errors = { errors: 'error' }
        const props = { auth: 'auth'}
        wrapper = shallow(<Register
            registerUser={registerUser}
            auth={props}
            errors={errors}
        />);
        console.error = jest.fn();
    });

    afterEach(() => {
        console.error('you cant see me');
        console.error.mockClear();
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should set the state on change', () => {
        wrapper.find('TextFieldGroup').at(0).simulate('change', {
            target: { value: 'Change Function' }
        });
        expect(wrapper).toMatchSnapshot();
    });
    it('should call onSubmit the form', () => {

        const onSubmitSpy = jest.fn();
        const registerUser = jest.fn();

        wrapper = shallow(<Register registerUser={registerUser} onSubmit={onSubmitSpy}/>)
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        })
        expect(registerUser.mock.calls.length).toBe(1);
    });

});