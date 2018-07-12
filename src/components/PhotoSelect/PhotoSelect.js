import React from 'react';
import { map } from 'lodash';
import './photoSelect.scss';

class PhotoSelect extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-12 align-items-center">
                    {this.props.photos &&
                        <div className="row mt-3 ">
                            {map(this.props.photos, photo => {
                                return (
                                    <div className="col-6 text-center">
                                        <div className="row justify-content-center">
                                            <div className="placeholder col-10">
                                                <img className="clickable-photo" src={photo.photo.urls.custom} onClick={() => this.props.handleClick(photo.type)} />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    }
                </div>
            </div>
        );
    }
}

export default PhotoSelect;