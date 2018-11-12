import React from 'react'
import KendoLinks   from '../../../components/static/KendoLinks';
import { shallow } from 'enzyme';


describe('Kendo Links', () => {
    it('should render correctly', () => {
        const wrapper = shallow(<KendoLinks />)
        expect(wrapper).toMatchSnapshot();
    })
})