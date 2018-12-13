import React from 'react'
import { shallow } from 'enzyme';
import { MembersPhotoFilter } from '../../../components/members/MembersPhotoFilter';
import filters from '../../fixtures/filters';

describe('Members photo filter component', () => {

    let memberFilter, setPhotoTextFilter;

    beforeEach(() => {
        setPhotoTextFilter = jest.fn();
        memberFilter = shallow(<MembersPhotoFilter setPhotoTextFilter={setPhotoTextFilter} filters={filters}/>)
    })
    it('should render correctly', () => {
        expect(memberFilter).toMatchSnapshot();
    });
    // describe('when typring into the photo text filter field', () => {
        
    //     const description = 'New filter'

    //     beforeEach(() => {
    //         memberFilter.find('.filter-text').simulate('change', { target: { value: description }});
    //     })

    //     it('should set props to equal text photo input', () => {
    //         expect(memberFilter.props().photoText).toEqual(description);
    //     });
    // });
});