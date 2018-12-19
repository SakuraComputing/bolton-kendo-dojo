import React from 'react'
import { shallow } from 'enzyme';
import { MembersPhotoFilter } from '../../../components/members/MembersPhotoFilter';
// import filters from '../../fixtures/filters';

describe('Members photo filter component', () => {

    let memberFilter, setPhotoTextFilter, filters;

    beforeEach(() => {
        setPhotoTextFilter = jest.fn();
        filters = jest.fn();
        memberFilter = shallow(<MembersPhotoFilter setPhotoTextFilter={setPhotoTextFilter} filters={filters}/>)
    })
    it('should render correctly', () => {
        expect(memberFilter).toMatchSnapshot();
    });
    describe('when typing into the photo text filter field', () => {
        
        const description = 'More Details'

        beforeEach(() => {
            memberFilter.find('.filter-text').simulate('change', { target: { value: description }});
        })

        it('should set props to equal text photo input', () => {
            expect(setPhotoTextFilter).toHaveBeenCalledWith(description);
        });
    });
    describe('when typing into the photo title filter field', () => {
        
        const title = 'Title1'

        beforeEach(() => {
            memberFilter.find('.filter-title').simulate('change', { target: { value: title }});
        })

        it('should set props to equal text photo input', () => {
            expect(setPhotoTextFilter).toHaveBeenCalledWith(title);
        });
    });
});