import React from 'react';
import { shallow } from 'enzyme';
import KendoMindMap from '../../../components/members/KendoMindMap';


describe('Mind Map Component', () => {

    let kendoMindMap;

    beforeEach(() => {
        kendoMindMap = shallow(<KendoMindMap />)
    })

    it('should render correctly', () => {
        expect(kendoMindMap).toMatchSnapshot();
    });
});