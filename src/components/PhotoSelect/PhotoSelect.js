import React from 'react';
import { map } from 'lodash';

class PhotoSelect extends React.Component {
    render() {
        console.log(this.props.photos);
        return (
            <div>
                {this.props.photos &&
                    <div>
                        {map(this.props.photos, photo => {
                            return (
                                <img src={photo.urls.small} />
                            );
                        })}
                    </div>
                }
            </div>
        );
    }
}

export default PhotoSelect;