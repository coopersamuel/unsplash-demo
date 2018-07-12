import React from 'react';
import PhotoSelect from '../PhotoSelect/PhotoSelect';

import { photoIds, playlistIds } from '../../apiConfig';
import { map } from 'lodash';
import { fetchPhotos, fetchSelectPhoto } from '../../actions/actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class PhotoContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            typeSelected: '',
        };

        this.generatePhotos = this.generatePhotos.bind(this);
        this.handlePhotoSelect = this.handlePhotoSelect.bind(this);
    }

    async componentWillMount() {
        await this.generatePhotos();
    }

    generatePhotos() {
        this.props.fetchSelectPhoto(photoIds.moody, 'moody');
        this.props.fetchSelectPhoto(photoIds.adventurous, 'adventurous');
        this.props.fetchSelectPhoto(photoIds.chill, 'chill');
        this.props.fetchSelectPhoto(photoIds.bright, 'bright');
    }

    handlePhotoSelect(type) {
        this.props.fetchPhotos(type);
        this.setState({ typeSelected: type });
    }

    render() {
        return (
            <div className="container-fluid">
                {!this.state.typeSelected && 
                    <PhotoSelect photos={this.props.selectPhotos} handleClick={this.handlePhotoSelect} />

                    ||

                    <div>Next component here</div>
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectPhotos: state.selectPhotos,
        photos: state.photos
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchSelectPhoto,
        fetchPhotos
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer);