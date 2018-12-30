import React from 'react';
import { shallow, mount } from 'enzyme';
import { Posts } from '../../../../components/members/posts/Posts';

describe('Posts Component', () => {
  let posts, props, mockGetPosts;

  mockGetPosts = jest.fn();

  beforeEach(() => {
      props = {
          post: {
              posts: [],
              loading: false
          },
          getPosts: mockGetPosts
      }
      posts = shallow(<Posts {...props}/>)
  });
  it('should render correctly', () => {
      expect(posts).toMatchSnapshot();
  });
  it('should contain a PostForm component', () => {
      expect(posts.find('Connect(PostForm)').exists()).toBe(true);
  });
  it('should render the spinner component', () => {
      beforeEach(() => {
          props = {
              post: {
                  posts: [],
                  loading: true
              },
              getPosts: mockGetPosts
          }
          posts = shallow(<Posts {...props} />)
      })
      expect(posts).toMatchSnapshot();
  });
  describe('when mounted', () => {
        beforeEach(() => {
            mockGetPosts = jest.fn();
            props.getPosts = mockGetPosts;
            posts = shallow(<Posts {...props} />)
        })  
        it('should dispatch the `getPosts` method it receives from props', () => {
            expect(posts).toMatchSnapshot();
            expect(mockGetPosts).toHaveBeenCalled();
        });
  });
})
