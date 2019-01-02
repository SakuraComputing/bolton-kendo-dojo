import React from 'react';
import { shallow } from 'enzyme';
import { Post } from '../../../../components/members/post/Post';

describe('Comment Feed Component', () => {
  let post, props;

  beforeEach(() => {
      props = {
            post: {
                post: jest.fn(),
                loading: false
            },
            match: {
                params: jest.fn()
            },
            getPost: jest.fn()
        };
        post = shallow(<Post {...props}/>);
  });
  it('should render correctly', () => {
      expect(post).toMatchSnapshot();
  });
})
