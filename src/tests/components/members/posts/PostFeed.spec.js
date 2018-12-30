import React from 'react';
import { shallow } from 'enzyme';
import PostFeed from '../../../../components/members/posts/PostFeed';

describe('PostFeed component', () => {
  let postFeed;

  beforeEach(() => {
    const props = {
        posts: [
            { post: 'test'},
            { post: 'test2'}
        ]
    }
    postFeed = shallow(<PostFeed {...props} />)
  });
  it('should render correctly', () => {
      expect(postFeed).toMatchSnapshot();
  });
})
