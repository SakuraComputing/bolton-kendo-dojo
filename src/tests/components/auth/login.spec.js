import React from 'react';
import { Login } from '../../../components/auth/login';
import { shallow } from 'enzyme';

describe('Login Form', () => {

    let wrapper;

    beforeEach(() => {
        const loginUser = jest.fn();
        const errors = { errors: 'error' }
        const props = { auth: 'auth'}
        wrapper = shallow(<Login 
            loginUser={loginUser}
            auth={props}
            errors={errors}
        />);
        console.error = jest.fn();
    });

    afterEach(() => {
        console.error.mockClear()
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
    it('should call onSubmit the form', () => {

        const onSubmitSpy = jest.fn();
        const loginUser = jest.fn();

        wrapper = shallow(<Login loginUser={loginUser} onSubmit={onSubmitSpy}/>)
        wrapper.find('form').simulate('submit', {
            preventDefault: () => {}
        })
        expect(loginUser.mock.calls.length).toBe(1);
    });
    describe('componentWillReceiveProps', () => {
        it('should set the state if an error has occured', () => {
            const props = { auth: 'auth' }
            wrapper = shallow(<Login {...props} />)
            wrapper.setProps({ errors: 'errors' });
    
            expect(wrapper.state().errors).toEqual('errors')
        });        
    });
});