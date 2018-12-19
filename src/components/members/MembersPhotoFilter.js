import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setPhotoTextFilter, setPhotoFilterTitle, setPhotoDateSortOrder } from '../../actions/filterActions';

export class MembersPhotoFilter extends Component {

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
                                <form onSubmit={this.onFormSubmit} className="image-header">
                                    <div className="image-search-container">
                                        <input
                                            type="text"
                                            className="filter-text input-box"
                                            placeholder="Search By Description"
                                            value={this.props.filters.photoText}
                                            onChange={this.onTextChange}
                                            name="filterText"
                                        />                                        
                                        <input
                                            type="text"
                                            className="filter-title input-box"
                                            placeholder="Search By Title"
                                            value={this.props.filters.photoTitle}
                                            onChange={this.onTitleChange}
                                            name="filterTitle"
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
    setPhotoFilterTitle: (photoTitle) => dispatch(setPhotoFilterTitle(photoTitle)),
    setPhotDateSortOrder: () => dispatch(setPhotoDateSortOrder())
})
export default connect(mapStateToProps, mapDispatchToProps)(MembersPhotoFilter);
