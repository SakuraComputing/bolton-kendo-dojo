import React from 'react';
import Spinner from '../../common/Spinner';
import { shallow } from 'enzyme';

describe('Spinner component', () => {
  it('should render', () => {
      const spinner = shallow(<Spinner />)
      expect(spinner).toMatchSnapshot();
  });
})
