import React from 'react';
import { shallow } from 'enzyme';
import Post from '../../../../components/members/post/Post';

describe('Comment Feed Component', () => {
  let post;

  beforeEach(() => {
      post = shallow(<Post />)
  });
  it('should render correctly', () => {
      expect(post).toMatchSnapshot();
  });
})
