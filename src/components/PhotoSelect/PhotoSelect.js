import React from 'react';
import { map } from 'lodash';
import './photoSelect.scss';

class PhotoSelect extends React.Component {
    render() {
        return (
            <div className="photos-container">
                {this.props.photos &&
                    <div>
                        {map(this.props.photos, photo => {
                            return (
                                <div 
                                    className="clickable-photo" 
                                    key={photo.photo.id}
                                    style={{ backgroundImage: `url(${photo.photo.urls.regular})` }} 
                                    onClick={() => this.props.handleClick(photo.type)}>
                                </div>
                            );
                        })}
                    </div>
                }
                <div className="instructions-container">
                    <div className="instructions">
                        Choose the photo that describes your current mood
                    </div>
                </div>
            </div>
        );
    }
}

export default PhotoSelect;