import React from 'react';
import fetchPhotos from '../../utils/unsplash';

class PhotoContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button onClick={() => {
                fetchPhotos("mountains");
            }}>Fetch photos</button>
        );
    }
}

export default PhotoContainer;