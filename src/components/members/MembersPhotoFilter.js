import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPhotoTextFilter, setPhotoDateSortOrder } from '../../actions/filterActions';

export class MembersPhotoFilter extends Component {

    onTextChange = (e) => {
        this.props.setPhotoTextFilter(e.target.value);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    className="filter-text"
                    placeholder="Search By Description"
                    value={this.props.filters.photoText}
                    onChange={this.onTextChange}
                />
            </div>
        )
    }
}

const mapStateToProps = state => ({
    filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setPhotoTextFilter: (photoText) => dispatch(setPhotoTextFilter(photoText)),
    setPhotDateSortOrder: () => dispatch(setPhotoDateSortOrder())
})
export default connect(mapStateToProps, mapDispatchToProps)(MembersPhotoFilter);
