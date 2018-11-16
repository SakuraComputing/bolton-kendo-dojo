import React from 'react'
import { shallow } from 'enzyme';
import Pin from '../../common/Pin';

describe('Pin Component', () => {
    it('should render correctly', () => {
        const pin = shallow(<Pin />)
        expect(pin).toMatchSnapshot();
    })
})