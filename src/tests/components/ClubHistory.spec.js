import React from 'react';
import { shallow } from 'enzyme';
import ClubHistory from '../../components/ClubHidtory';

describe('Club History Component', () => {
    it('should render correctly', () => {
        const clubhistory = shallow(<ClubHistory />)
        expect(clubhistory).toMatchSnapshot();
    });
});