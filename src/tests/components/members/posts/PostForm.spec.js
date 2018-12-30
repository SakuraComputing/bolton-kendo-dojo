import React from 'react';
import { shallow } from 'enzyme';
import PostForm from '../../../../components/members/posts/PostForm.js';

describe('Post Form Component', () => {
    
    let postForm;

    beforeEach(() => {
        postForm = shallow(<PostForm />)
    })
    it('should render correctly', () => {
        expect(postForm).toMatchSnapshot();
    });
});