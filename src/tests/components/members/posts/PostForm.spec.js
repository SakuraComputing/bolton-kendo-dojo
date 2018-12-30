import React from 'react';
import { shallow } from 'enzyme';
import { PostForm } from '../../../../components/members/posts/PostForm.js';

describe('Post Form Component', () => {
    
    let postForm;

    beforeEach(() => {
        postForm = shallow(<PostForm />)
    })
    it('should render correctly', () => {
        expect(postForm).toMatchSnapshot();
    });

    it('should set the initial state', () => {
        expect(postForm.state()).toEqual({ text: '', errors: {} })
    });

    it('should have a submit button', () => {
        expect(postForm.find('.post-submit').exists()).toBe(true);
    });

    it('should change the post text area when the user types', () => {
        const postText = 'Something';
        postForm.find('.post-text').simulate('change', {
            target: { value: postText }
        });
        expect(postForm.state().text).toEqual(postText);
    });

    describe('Post Submit', () => {
        
        let wrapper, addPostMock, props;

        beforeEach(() => {
            const onSubmitSpy = jest.fn();
            addPostMock = jest.fn();
            props = {
                auth: { user: jest.fn() },
                addPost: jest.fn()
            }
            wrapper = shallow(<PostForm onSubmit={onSubmitSpy} {...props} />)
        })
        it('should call add post on form submit', () => {
            wrapper.find('form').simulate('submit', {
                preventDefault: () => {}
             });
        });
    });
    
});