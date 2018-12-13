import React from 'react';
import { shallow } from 'enzyme';
import MemberPhotoDashboard from '../../../components/members/MemberPhotoDashboard';

describe('Memeber Photo Dasboard Component', () => {

    let dashboard;

    beforeEach(() => {
        dashboard = shallow(<MemberPhotoDashboard />);
    })

    it('should render correctly', () => {
        expect(dashboard).toMatchSnapshot();
    });
});