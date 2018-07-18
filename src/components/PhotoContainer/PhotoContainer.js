import React from 'react';
import PhotoSelect from '../PhotoSelect/PhotoSelect';
import Slideshow from '../Slideshow/Slideshow';
import './PhotoContainer.scss';

import { photoIds, playlistIds } from '../../apiConfig';
import { map } from 'lodash';
import { fetchPhotos, fetchSelectPhoto, fetchPlaylist } from '../../actions/actions';
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

    componentWillMount() {
        this.generatePhotos();
    }

    generatePhotos() {
        /**
         * This function is VERY ugly, unfortunately right now there is no good way to grab four photos each with a different search term
         * so four separate API calls will have to do for now
         */

        this.props.fetchSelectPhoto(photoIds.moody, 'moody');
        this.props.fetchSelectPhoto(photoIds.adventurous, 'adventurous');
        this.props.fetchSelectPhoto(photoIds.chill, 'chill');
        this.props.fetchSelectPhoto(photoIds.bright, 'bright');
    }

    handlePhotoSelect(type) {
        this.props.fetchPhotos(type);
        this.props.fetchPlaylist(playlistIds[type]);
        this.setState({ typeSelected: type });
    }

    render() {
        return (
            <div className="container-fluid full-width-container">
                {!this.state.typeSelected && 
                    <PhotoSelect photos={this.props.selectPhotos} handleClick={this.handlePhotoSelect} />

                    ||

                    <Slideshow photos={this.props.photos} playlist={this.props.playlist} />
                }
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        selectPhotos: state.selectPhotos,
        photos: state.photos,
        playlist: state.playlist
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        fetchSelectPhoto,
        fetchPhotos,
        fetchPlaylist
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoContainer);