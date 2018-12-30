import React from 'react';
import { shallow } from 'enzyme';
import PostFeed from '../../../../components/members/posts/PostFeed';

describe('PostFeed component', () => {
  let postFeed;

  beforeEach(() => {
    const props = {
        posts: jest.fn()
    }
    postFeed = shallow(<PostFeed {...props}/>)
  });
  it('should render correctly', () => {
      expect(postFeed).toMatchSnapshot();
  });
  it('should include the PostItem component', () => {
      expect(postFeed.find('Connect(PostItem)').exists()).toBe(true);
  });
})
