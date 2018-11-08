import React from 'react';
import { shallow } from 'enzyme';
import TheoryPage from '../../../components/static/TheoryPage';

describe('Theory page', () => {
    it('should render correctly',() => {
       const wrapper = shallow(<TheoryPage />);
       expect(wrapper).toMatchSnapshot();
    });
});