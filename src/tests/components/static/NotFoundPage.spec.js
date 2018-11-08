import React from 'react';
import { shallow } from 'enzyme';
import NotFoundPage from '../../../components/static/NotFoundPage';


describe('Not found page', () => {
    it('should render correctly',() => {
       const wrapper = shallow(<NotFoundPage />);
       expect(wrapper).toMatchSnapshot();
    });
});