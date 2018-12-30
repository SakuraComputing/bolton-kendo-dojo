import React from 'react';
import { shallow } from 'enzyme';
import { TextAreaFieldGroup } from '../../common/TextAreaFieldGroup';

describe('Text Area Field Group', () => {

    let wrapper, name, value, type, onChange;

    beforeEach(() => {
        name = 'test';
        value = 'test';
        type = 'text';
        onChange = jest.fn();

        wrapper = shallow(<TextAreaFieldGroup 
            name={name} 
            value={value}
            type={type}
            onChange={onChange}
        />);
    })
    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});