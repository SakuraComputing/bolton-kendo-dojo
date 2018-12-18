import React from 'react'
import { shallow } from 'enzyme';
import { MemberPhoto } from '../../../components/members/MembersPhotos';
import uploads from '../../fixtures/uploads';
import moment from 'moment';

describe('Member Photos', () => {
    
    let photo, getMemberUploads, onUploadDelete,props, onDateChange;

    beforeEach(() => {
        getMemberUploads = jest.fn();
        onUploadDelete = jest.fn();
        props = { loading: false, uploads: uploads } ;
        photo = shallow(<MemberPhoto getMemberUploads={getMemberUploads} onUploadDelete={onUploadDelete} uploads={props}/>)
    });

    it('should render correctly', () => {
        expect(photo).toMatchSnapshot();
    });

    it('should initialise present in `state`', () => {
        expect(photo.state()).toEqual({
            file: null,
            title: '',
            description: '',
            eventData: null,
            errors: {},
            offset: 0,
            data: [],
            perPage: 16,
            currentPage: 0,
            calendarFocused: false
        });
    });
    
    describe('Form Handling', () => {
        describe('When typing into the title field', () => {
            const title = 'New Title';

            beforeEach(() => {
                photo.find('.upload-title').simulate('change', { target: { value: title }})
            })
            it('should accept an input on the title', () => {
                expect(photo.state().title).toEqual(title);
            });
        });
        describe('When selecting a date from the date picker', () => {

            let now;

            beforeEach(() => {
                now = moment();
                photo.find('SingleDatePicker').prop('onDateChange')(now)
            });
            it('should set the new date on date change', () => {
                expect(photo.state('eventData')).toEqual(now);
            });
        });
        describe('When typing in the description field', () => { 
            const description = 'New Photo';
    
            beforeEach(() => {
                photo.find('.upload-text').simulate('change', { target: { value: description }});
            })

            it('should accept an input on the description', () => {
                expect(photo.state().description).toEqual(description);
            });
        });
        
        describe('When selecting a file for input', () => {
            const file = null;
            beforeEach(() => {
                photo.find('.upload-file').simulate('change', { target: { files: file }});
            });
            it('should add the filename to the `state`', () => {    
                expect(photo.state().file).toEqual(file);
            });
        });

        describe('on update', () => {            

            let wrapper;
            let getMemberUploadsMock;
            let postMemberUploadsMock;

            beforeEach(() => {
                const onSubmitSpy = jest.fn();
                getMemberUploadsMock = jest.fn();
                postMemberUploadsMock = jest.fn();
                wrapper = shallow(
                <MemberPhoto 
                    uploads={uploads[0]} 
                    onSubmit={onSubmitSpy} 
                    getMemberUploads={getMemberUploadsMock}
                    postMemberUploads={postMemberUploadsMock}
                />)
            });
            it('should call onSubmit', () => {
                wrapper.find('form').simulate('submit', {
                   preventDefault: () => {}
                });
                expect(getMemberUploadsMock).toHaveBeenCalled();
            });
        });
        it('should display no uplaods when none are passed in', () => {
            getMemberUploads = jest.fn();
            onUploadDelete = jest.fn();

            props = { loading: false, uploads: [] } ;
            photo = shallow(<MemberPhoto getMemberUploads={getMemberUploads} onUploadDelete={onUploadDelete} uploads={props} />)
        });
    })
});