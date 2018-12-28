import React from 'react';
import { shallow } from 'enzyme';
import PostItem from '../../../../components/members/posts/PostItem';

describe('Post Item Component', () => {

    let postItem; 

    beforeEach(() => {
        postItem = shallow(<PostItem />)
    })
    it('should render correctly', () => {
        expect(postItem).toMatchSnapshot();   
    });
});