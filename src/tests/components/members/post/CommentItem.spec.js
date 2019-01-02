import React from 'react';
import { shallow } from 'enzyme';
import { CommentItem } from '../../../../components/members/post/CommentItem';

describe('Comment Item Component', () => {
  let commentItem, comment, auth;

  beforeEach(() => {
      comment = jest.fn();
      auth = { user: jest.fn() };
      commentItem = shallow(<CommentItem comment={comment} auth={auth}/>)
  });
  it('should render correctly', () => {
      expect(commentItem).toMatchSnapshot();
  });
})
