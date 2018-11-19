import React from 'react';
import { shallow } from 'enzyme';
import { ClubHistory } from '../../components/ClubHistory';
import club from '../fixtures/club'; 

describe('Club History Component', () => {

    let clubhistory;

    beforeEach(() => {
        clubhistory = shallow(<ClubHistory club={{club}} />);
    });

    it('should render correctly', () => {
        expect(clubhistory).toMatchSnapshot();
    });

    it('should not display a spinner when state loading is false', () => {
        const props = {
            club: {
                loading: false,
                club
            },
        }
        clubhistory = shallow(<ClubHistory {...props} />)
        expect(clubhistory.find('Spinner').length).toEqual(0);
    });

    it('should display a spinner when state loading is true', () => {
        const props = {
            club: {
                loading: true,
                club: {}
            },
        }
        clubhistory = shallow(<ClubHistory {...props} />)
        expect(clubhistory.find('Spinner').length).toEqual(1);
    });

});