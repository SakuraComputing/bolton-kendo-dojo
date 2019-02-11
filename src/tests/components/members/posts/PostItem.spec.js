import React from 'react';
import { shallow } from 'enzyme';
import { PostItem } from '../../../../components/members/posts/PostItem';

describe.skip('Post Item Component', () => {

    let postItem, props, mockDeletePost; 
    const post = jest.fn();
    
    
    beforeEach(() => {
        mockDeletePost = jest.fn();
        props = {
            name: 'test',
            deletePost: mockDeletePost
        }
        postItem = shallow(<PostItem post={post} {...props} />)
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
    describe('when clicking the delete button', () => {
        beforeEach(() => {
            props = {
                name: 'test',
                
                deletePost: mockDeletePost
            };
        
            postItem = shallow(<PostItem post={post} {...props} />)
        })

        it('should call deletePost', () => {
            postItem.find('.item-delete').simulate('click');
            expect(mockDeletePost).toHaveBeenCalled();
        });
    });
});