import { shallow } from 'enzyme';
import React from 'react';
import Menu from '../../components/Menu.js'

describe('menu component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Menu />);
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
});