import React from 'react';

import { fetchPhotos } from '../../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PhotoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={() => {
                this.props.fetchPhotos("mountains");
            }}>Fetch photos</button>
        );
    }
}

function mapStateToProps(state) {
    return {
        photos: state.photos
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchPhotos
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer);