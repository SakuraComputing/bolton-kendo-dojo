import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

const app = shallow(<App />);

describe('App component', () => {
    it('should render correct;y', () => {
        expect(app).toMatchSnapshot();
    });
});