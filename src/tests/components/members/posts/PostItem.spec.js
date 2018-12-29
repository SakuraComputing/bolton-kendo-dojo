import React from 'react';
import { shallow } from 'enzyme';
import { PostItem } from '../../../../components/members/posts/PostItem';

describe('Post Item Component', () => {

    let postItem; 

    beforeEach(() => {
        const post = jest.fn();
        postItem = shallow(<PostItem post={post}/>)
    })
    it('should render correctly', () => {
        expect(postItem).toMatchSnapshot();   
    });

    it('should display a delete button', () => {
        expect(postItem.find('.item-delete').exists()).toBe(true);
    });

    it('should display a comments button', () => {
        expect(postItem.find('.item-comments').exists()).toBe(true);
    });
});