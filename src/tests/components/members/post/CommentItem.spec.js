import React from 'react';
import { shallow } from 'enzyme';
import CommentItem from '../../../../components/members/post/CommentItem';

describe('Comment Item Component', () => {
  let commentItem;

  beforeEach(() => {
      commentItem = shallow(<CommentItem />)
  });
  it('should render correctly', () => {
      expect(commentItem).toMatchSnapshot();
  });
})
