import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setPhotoTextFilter, 
        setPhotoFilterTitle, 
        setPhotoDateSortOrder, 
        setStartDate,
        setEndDate
} from '../../actions/filterActions';

export class MembersPhotoFilter extends Component {

    state = {
        calendarFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate);
        this.props.setEndDate(endDate);
    }

    onFocusChange = (calendarFocused) => {
        this.setState(
            () => ({ calendarFocused})
        )
    }

    onTextChange = (e) => {
        this.props.setPhotoTextFilter(e.target.value);
    }

    onTitleChange = (e) => {
        this.props.setPhotoFilterTitle(e.target.value);
    }

    render() {
        return (
            <div>
                <div className="wrap-collapsible">
                        <input id="collapsible-search" className="toggle-search" type="checkbox"/>
                        <label htmlFor="collapsible-search" className="lbl-toggle-search">Search</label>
                        <div className="collapsible-content-search">
                            <div className="content-inner">
                                <form onSubmit={this.onFormSubmit} className="image-search">
                                    <div className="image-search-container">
                                        <input
                                            type="text"
                                            className="filter-text input-box"
                                            placeholder="Search By Description"
                                            value={this.props.filters.photoText}
                                            onChange={this.onTextChange}
                                            name="filterText"
                                        />          
                                    </div>
                                    <div className="image-search-container">
                                        <input
                                            type="text"
                                            className="filter-title input-box"
                                            placeholder="Search By Title"
                                            value={this.props.filters.photoTitle}
                                            onChange={this.onTitleChange}
                                            name="filterTitle"
                                        />                                       
                                    </div>
                                    <DateRangePicker 
                                        startDate={this.props.filters.startDate}
                                        endDate={this.props.filters.endDate}
                                        onDatesChange={this.onDatesChange}
                                        focusedInput={this.state.calendarFocused}
                                        onFocusChange={this.onFocusChange}
                                        showClearDates={true}
                                        numberOfMonths={1}
                                        isOutsideRange={() => false}    
                                        startDateId={'test'}
                                        endDateId={'test'}                                    
                                    />
                                </form>
                            </div>
                        </div>
                    </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setPhotoTextFilter: (photoText) => dispatch(setPhotoTextFilter(photoText)),
    setPhotoFilterTitle: (photoTitle) => dispatch(setPhotoFilterTitle(photoTitle)),
    setPhotDateSortOrder: () => dispatch(setPhotoDateSortOrder()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})
export default connect(mapStateToProps, mapDispatchToProps)(MembersPhotoFilter);
