import React from 'react';
import { shallow } from 'enzyme';
import { Posts } from '../../../../components/members/posts';

describe('Posts Component', () => {
  let posts;

  beforeEach(() => {
      posts = shallow(<Posts />)
  });
  it('should render correctly', () => {
      expect(posts).toMatchSnapshot();
  });
})
