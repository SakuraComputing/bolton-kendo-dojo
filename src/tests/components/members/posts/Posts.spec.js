import React from 'react';
import { shallow } from 'enzyme';
import { Posts } from '../../../../components/members/posts/Posts';

describe('Posts Component', () => {
  let posts;

  beforeEach(() => {
      const props = {
          post: {
              posts: [],
              loading: false
          }
      }
      posts = shallow(<Posts {...props}/>)
  });
  it('should render correctly', () => {
      expect(posts).toMatchSnapshot();
  });
  it('should contain a PostForm component', () => {
      expect(posts.find('Connect(PostForm)').exists()).toBe(true);
  });
})
