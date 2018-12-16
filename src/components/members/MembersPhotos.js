import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import Spinner from '../../common/Spinner';
import { getMemberUploads, postMemberUploads, deleteMemberUploads } from '../../actions/uploadActions';
import MemberPhotoItem from '../../components/members/MemberPhotoItem';
import { confirmAlert } from 'react-confirm-alert'; 
import MemberPhotoFilter from './MembersPhotoFilter';
import selectPhotos from '../../selectors/photos';

export class MemberPhoto extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            file: null,
            description: '',
            errors: {},
            offset: 0,
            data: [],
            perPage: 16,
            currentPage: 0
        };
    };

    componentDidMount() {
        this.props.getMemberUploads();
    }
    
    onChange = (e) => {
        this.setState({ file: e.target.files[0] })  
    };

    onDescriptionChange = (e) => {
        this.setState({ description: e.target.value })
    }

    onFormSubmit = (e) => {
        e.preventDefault();

        const { file, description } = this.state; 

        let formData = new FormData();
        formData.append('image', file);
        formData.set('description', description);
        this.props.postMemberUploads(formData);
        this.setState({
            file: null,
            description: '',
            errors: {}
        })
    }

    onUploadDelete = (index, e) => {
        confirmAlert({
            title: "Confirm Delete",
            message:"Are you sure you want to delete this?",
            buttons: [
                {
                    label: 'Confirm',
                    onClick: () => {
                        const photoId = this.props.uploads.uploads[index]._id;
                        this.props.deleteMemberUploads(photoId);    
                    }
                },
                {
                    label: 'Cancel',
                    onClick: () => {}
                }
            ]
        })
    }

    viewPhoto = (id) => {
        console.log("Lets see the photo", this.props.uploads.uploads[id]._id);
    }

    handlePageClick = (data) => {
        let selectedPage = data.selected
        let offset = Math.ceil(selectedPage * this.state.perPage);
        console.log('Selected Page', selectedPage, 'Offset', offset);
        this.setState({ currentPage: selectedPage, offset: offset},
            () => { this.setElementsForCurrentPage();
        });
    }

    setElementsForCurrentPage = () => {



        return this.props.uploads.uploads.slice(this.state.offset, this.state.offset + this.state.perPage).map(((upload, key) => {
            return <MemberPhotoItem 
                    key={upload._id}
                    filename={upload.filename}
                    date={upload.date}
                    description={upload.description}
                    onUploadDelete={this.onUploadDelete.bind(this, key)}
                    viewPhoto={this.viewPhoto.bind(this, key)}
                />
        }))
    }

    render() {

        let album, pageCount, paginationElement;

        const { uploads, loading } = this.props.uploads;

        if(uploads === null || uploads === undefined || loading) {
            album = <Spinner />
        } else {
            if(uploads.length > 0) {
                pageCount = Math.ceil(uploads.length / this.state.perPage);
                album = this.setElementsForCurrentPage();
                // console.log("Album results", album);
            } else {
                album = <h4>No uploads found....</h4>
            }
            if(pageCount > 0) {
                paginationElement = (
                    <ReactPaginate
                        previousLabel={"← Previous"}
                        nextLabel={"Next →"}
                        breakLabel={<span className="gap">...</span>}
                        pageCount={this.state.pageCount}
                        onPageChange={this.handlePageClick}
                        forcePage={this.state.currentPage}
                        containerClassName={"pagination"}
                        previousLinkClassName={"previous_page"}
                        nextLinkClassName={"next_page"}
                        disabledClassName={"disabled"}
                        activeClassName={"active"}
                    />
                )
            }
        }
        
        return (
            <div>
                <div className="images-uploads content-container">
                    <h1 className="image-title">Member Photographs</h1>
                    <MemberPhotoFilter />
                    <div className="wrap-collapsible">
                        <input id="collapsible-upload" className="toggle-upload" type="checkbox"/>
                        <label htmlFor="collapsible-upload" className="lbl-toggle-upload">Uploads</label>
                        <div className="collapsible-content-upload">
                            <div className="content-inner">
                                <form onSubmit={this.onFormSubmit} className="image-header">
                                    <div className="image-header-container">
                                        <label htmlFor="upload-file" className="upload-file button-small">Get Photo</label>
                                        <input type="file" accept=".jpg,.jpeg,.png,.bmp,.gif" name="image" id="upload-file" onChange={this.onChange} />
                                    </div>
                                    <div className="image-header-container">
                                        <textarea rows="2" col="3" value={this.state.description} className="upload-text input-box" type="text" name="description" onChange={this.onDescriptionChange}/>
                                        <label className="upload-label" htmlFor="description" >Add Photo Description</label>
                                    </div>
                                    <div className="image-header-container">
                                        <label className="upload-label" htmlFor="submit">Upload Photo</label>
                                        <input type="submit" value="Submit" name="submit" className="button-small"/>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="image-container">
                            {album}
                        </div>
                        {paginationElement}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        uploads: selectPhotos(state.uploads.uploads, state.filters)
    }
};
export default connect(mapStateToProps, { getMemberUploads , postMemberUploads, deleteMemberUploads })(MemberPhoto);
