import React from 'react';
import { shallow } from 'enzyme';
import CommentFeed from '../../../../components/members/post/CommentFeed';

describe('Comment Feed Component', () => {
  let commentFeed;

  beforeEach(() => {
      const comments = [jest.fn()]; 
      commentFeed = shallow(<CommentFeed comments={comments} />)
  });
  it('should render correctly', () => {
      expect(commentFeed).toMatchSnapshot();
  });
})
