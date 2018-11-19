import React from 'react';
import { shallow } from 'enzyme';
import { About } from '../../../components/static/About.js';
import club from '../../fixtures/club';

describe('About Bolton Kendo Dojo', () => {
    let about;

    beforeEach(() => {
        about = shallow(<About club={{club}}/>);
    });

    it('should render correctly', () => {
        expect(about).toMatchSnapshot();
    });

    it('should not display a spinner when state loading is false', () => {
        const props = {
            club: {
                loading: false,
                club
            },
        }
        about = shallow(<About {...props} />)
        expect(about.find('Spinner').length).toEqual(0);
    });

    it('should display a spinner when state loading is true', () => {
        const props = {
            club: {
                loading: true,
                club: {}
            },
        }
        about = shallow(<About {...props} />)
        expect(about.find('Spinner').length).toEqual(1);
    });
});
