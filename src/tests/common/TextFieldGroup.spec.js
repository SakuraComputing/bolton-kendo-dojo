import { shallow } from 'enzyme';
import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup';

describe('TextFieldGroup component', () => {

    let wrapper, name, value, type, onChange, error, info;

    beforeEach(() => {
        name = 'test';
        value = 'test';
        type = 'text';
        onChange = jest.fn();
        wrapper = shallow(<TextFieldGroup 
            name={name} 
            value={value}
            type={type}
            onChange={onChange}
        />);
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render any error message correctly', () => {
        error = 'An error has occured';
        wrapper = shallow(<TextFieldGroup 
            name={name} 
            value={value}
            type={type}
            onChange={onChange}
            error={error}        
        />);
        expect(wrapper).toMatchSnapshot();
    });
    it('should render any information message correctly', () => {
        info = 'info is available';
        wrapper = shallow(<TextFieldGroup 
            name={name} 
            value={value}
            type={type}
            onChange={onChange}
            info={info}    
        />);
        expect(wrapper).toMatchSnapshot();
    });
});