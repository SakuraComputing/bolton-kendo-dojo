import React from 'react';
import { shallow } from 'enzyme';
import { CommentForm } from '../../../../components/members/post/CommentForm';

describe('Comment Form Component', () => {
  let commentForm;

  beforeEach(() => {
      commentForm = shallow(<CommentForm />)
  });
  it('should render correctly', () => {
      expect(commentForm).toMatchSnapshot();
  });
})
