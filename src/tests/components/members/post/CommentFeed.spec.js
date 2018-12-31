import React from 'react';
import { shallow } from 'enzyme';
import CommentFeed from '../../../../components/members/post/CommentFeed';

describe('Comment Feed Component', () => {
  let commentFeed;

  beforeEach(() => {
      commentFeed = shallow(<CommentFeed />)
  });
  it('should render correctly', () => {
      expect(commentFeed).toMatchSnapshot();
  });
})
