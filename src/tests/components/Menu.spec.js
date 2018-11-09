import { shallow } from 'enzyme';
import React from 'react';
import { Menu } from '../../components/Menu.js'

describe('menu component', () => {

    let wrapper, auth;

    beforeEach(() => {
        auth = jest.fn();
        wrapper = shallow(<Menu auth={auth} />);
    });

    it('should render correctly', () => {
        expect(wrapper).toMatchSnapshot();
    });
    it('should render different options when user logged in', () => {
        expect(wrapper).toMatchSnapshot();        
    });
});