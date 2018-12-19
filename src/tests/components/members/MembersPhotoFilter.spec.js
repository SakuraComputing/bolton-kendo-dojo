import React from 'react'
import { shallow } from 'enzyme';
import { MembersPhotoFilter } from '../../../components/members/MembersPhotoFilter';
// import filters from '../../fixtures/filters';
import moment from 'moment';

describe('Members photo filter component', () => {

    let memberFilter, setPhotoTextFilter, setPhotoFilterTitle, 
    setStartDate, setEndDate, filters;

    beforeEach(() => {
        setPhotoTextFilter = jest.fn();
        setPhotoFilterTitle = jest.fn();
        setStartDate = jest.fn();
        setEndDate = jest.fn();
        filters = jest.fn();
        memberFilter = shallow(
            <MembersPhotoFilter 
                setPhotoTextFilter={setPhotoTextFilter} 
                setPhotoFilterTitle={setPhotoFilterTitle}
                filters={filters}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
            />)
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
            expect(setPhotoFilterTitle).toHaveBeenCalledWith(title);
        });
    });

    describe('Date Filter', () => {
        it('should handle date change', () => {
            const startDate = moment(0).add(4, 'years');
            const endDate = moment(0).add(4, 'years');
            memberFilter.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate })
            expect(startDate).toHaveBeenCalledWith(startDate);
            expect(startDate).toHaveBeenCalledWith(endDate);
        });
    });

});