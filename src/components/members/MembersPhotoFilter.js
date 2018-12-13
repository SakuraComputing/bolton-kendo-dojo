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
                <div className="wrap-collapsible">
                        <input id="collapsible-search" className="toggle-search" type="checkbox"/>
                        <label htmlFor="collapsible-search" className="lbl-toggle-search">Search</label>
                        <div className="collapsible-content-search">
                            <div className="content-inner">
                                <form onSubmit={this.onFormSubmit} className="image-header">
                                    <div className="image-header-container">
                                        <label className="upload-label" htmlFor="filterText" >Search photo description</label>
                                        <input
                                            type="text"
                                            className="filter-text input-box"
                                            placeholder="Search By Description"
                                            value={this.props.filters.photoText}
                                            onChange={this.onTextChange}
                                            name="filterText"
                                        />                                        
                                    </div>
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
    setPhotDateSortOrder: () => dispatch(setPhotoDateSortOrder())
})
export default connect(mapStateToProps, mapDispatchToProps)(MembersPhotoFilter);
