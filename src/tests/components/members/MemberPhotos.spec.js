import React from 'react'
import { shallow } from 'enzyme';
import { MemberPhoto } from '../../../components/members/MembersPhotos';
import uploads from '../../fixtures/uploads';

describe('Member Photos', () => {
    
    let photo, getMemberUploads, onUploadDelete,props;

    beforeEach(() => {
        getMemberUploads = jest.fn();
        onUploadDelete = jest.fn();
        props = { loading: false, uploads: uploads } ;
        photo = shallow(<MemberPhoto getMemberUploads={getMemberUploads} onUploadDelete={onUploadDelete} uploads={props} />)
    });

    it('should render correctly', () => {
        expect(photo).toMatchSnapshot();
    });

    it('should initialise present in `state`', () => {
        expect(photo.state()).toEqual({
            file: null,
            description: '',
            errors: {},
        });
    });
    
    // describe('Form handling', () => {
    //     it('should accept an input on the description', () => {
    //         photo.find('upload-text').simulate('change')
    //     })
    // })
});