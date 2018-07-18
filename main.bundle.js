/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var unsplashApiKeys = {
    accessKey: '5144e70c86707ac64a084fc09c9ffb3d370138599b8f2b0c8dca71ce50b6ef31',
    secretKey: '3dce983c822547168f1e1f3f7646c860f56a3b37a43e9fa5604fc4fe92b03a7e',
    redirectURI: 'urn:ietf:wg:oauth:2.0:oob'
};

var spotifyApiKeys = {
    clientId: 'ec4504f52f3a4d90aae01796a2a0d1d4',
    clientSecret: 'eead0a60c41343d79b8d16f0d17d06d5',
    redirectURI: 'https://coopersamuel.github.io/unsplash-demo/' // Change this later
};

exports.unsplashApiKeys = unsplashApiKeys;
exports.spotifyApiKeys = spotifyApiKeys;

/***/ }),

/***/ "./src/actions/actionTypes.js":
/*!************************************!*\
  !*** ./src/actions/actionTypes.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 *  Action Types
 */

var PROMISE = exports.PROMISE = 'PROMISE';
var FETCH_SELECT_PHOTO = exports.FETCH_SELECT_PHOTO = 'FETCH_SELECT_PHOTO';
var LOAD_SELECT_PHOTO = exports.LOAD_SELECT_PHOTO = 'LOAD_SELECT_PHOTO';
var FETCH_PHOTOS = exports.FETCH_PHOTOS = 'FETCH_PHOTOS';
var LOAD_PHOTOS = exports.LOAD_PHOTOS = 'LOAD_PHOTOS';
var FETCH_PLAYLIST = exports.FETCH_PLAYLIST = 'FETCH_PLAYLIST';
var LOAD_PLAYLIST = exports.LOAD_PLAYLIST = 'LOAD_PLAYLIST';

/***/ }),

/***/ "./src/actions/actions.js":
/*!********************************!*\
  !*** ./src/actions/actions.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.loadPlaylist = exports.fetchPlaylist = exports.loadSelectPhoto = exports.fetchSelectPhoto = exports.loadPhotos = exports.fetchPhotos = undefined;

var _actionTypes = __webpack_require__(/*! ./actionTypes */ "./src/actions/actionTypes.js");

var ActionTypes = _interopRequireWildcard(_actionTypes);

var _asyncMiddleware = __webpack_require__(/*! ../middleware/asyncMiddleware */ "./src/middleware/asyncMiddleware.js");

var _unsplash = __webpack_require__(/*! ../utils/unsplash */ "./src/utils/unsplash.js");

var _unsplash2 = _interopRequireDefault(_unsplash);

var _spotify = __webpack_require__(/*! ../utils/spotify */ "./src/utils/spotify.js");

var _spotify2 = _interopRequireDefault(_spotify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 *  Action Creators
 */

var fetchPhotos = exports.fetchPhotos = function fetchPhotos(searchTerm) {
    return (0, _asyncMiddleware.asyncAction)(_unsplash2.default.fetchPhotos(searchTerm).then(loadPhotos));
};

var loadPhotos = exports.loadPhotos = function loadPhotos(photos) {
    return {
        type: ActionTypes.LOAD_PHOTOS,
        payload: photos
    };
};

var fetchSelectPhoto = exports.fetchSelectPhoto = function fetchSelectPhoto(id, type) {
    return (0, _asyncMiddleware.asyncAction)(_unsplash2.default.fetchSinglePhoto(id).then(function (photo) {
        return loadSelectPhoto(photo, type);
    }));
};

var loadSelectPhoto = exports.loadSelectPhoto = function loadSelectPhoto(photo, type) {
    return {
        type: ActionTypes.LOAD_SELECT_PHOTO,
        payload: {
            type: type,
            photo: photo
        }
    };
};

var fetchPlaylist = exports.fetchPlaylist = function fetchPlaylist(playlistId) {
    return (0, _asyncMiddleware.asyncAction)(_spotify2.default.getPlaylist(playlistId).then(loadPlaylist));
};

var loadPlaylist = exports.loadPlaylist = function loadPlaylist(playlist) {
    return {
        type: ActionTypes.LOAD_PLAYLIST,
        payload: playlist
    };
};

/***/ }),

/***/ "./src/apiConfig/index.js":
/*!********************************!*\
  !*** ./src/apiConfig/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * This file holds the curated photos and playlists that this app uses
 * In an ideal world these would be chosen dynamically based on the users preferences,
 * but as of now, we'll take care of curating these
 */

// These are the ids for the curated photos
var photoIds = {
    moody: 'PDfe7H5GJR0',
    adventurous: 'UniC8xhlzaE',
    chill: 'VYApL4dcNn8',
    bright: '3TmLV0fLzfU'
};

// These are ids for the curated playlists
var playlistIds = {
    moody: '37i9dQZF1DX79Y9Kr2M2tM',
    adventurous: '37i9dQZF1DWSXBu5naYCM9',
    chill: '37i9dQZF1DWYzpSJHStHHx',
    bright: '37i9dQZF1DWVu0D7Y8cYcs'
};

exports.photoIds = photoIds;
exports.playlistIds = playlistIds;

/***/ }),

/***/ "./src/components/PhotoContainer/PhotoContainer.js":
/*!*********************************************************!*\
  !*** ./src/components/PhotoContainer/PhotoContainer.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _PhotoSelect = __webpack_require__(/*! ../PhotoSelect/PhotoSelect */ "./src/components/PhotoSelect/PhotoSelect.js");

var _PhotoSelect2 = _interopRequireDefault(_PhotoSelect);

var _Slideshow = __webpack_require__(/*! ../Slideshow/Slideshow */ "./src/components/Slideshow/Slideshow.js");

var _Slideshow2 = _interopRequireDefault(_Slideshow);

__webpack_require__(/*! ./PhotoContainer.scss */ "./src/components/PhotoContainer/PhotoContainer.scss");

var _apiConfig = __webpack_require__(/*! ../../apiConfig */ "./src/apiConfig/index.js");

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

var _actions = __webpack_require__(/*! ../../actions/actions */ "./src/actions/actions.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoContainer = function (_React$Component) {
    _inherits(PhotoContainer, _React$Component);

    function PhotoContainer(props) {
        _classCallCheck(this, PhotoContainer);

        var _this = _possibleConstructorReturn(this, (PhotoContainer.__proto__ || Object.getPrototypeOf(PhotoContainer)).call(this, props));

        _this.state = {
            typeSelected: ''
        };

        _this.generatePhotos = _this.generatePhotos.bind(_this);
        _this.handlePhotoSelect = _this.handlePhotoSelect.bind(_this);
        _this.handleHomeClick = _this.handleHomeClick.bind(_this);
        return _this;
    }

    _createClass(PhotoContainer, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.generatePhotos();
        }
    }, {
        key: 'generatePhotos',
        value: function generatePhotos() {
            /**
             * This function is VERY ugly, unfortunately right now there is no good way to grab four photos each with a different search term
             * so four separate API calls will have to do for now
             */

            this.props.fetchSelectPhoto(_apiConfig.photoIds.moody, 'moody');
            this.props.fetchSelectPhoto(_apiConfig.photoIds.adventurous, 'adventurous');
            this.props.fetchSelectPhoto(_apiConfig.photoIds.chill, 'chill');
            this.props.fetchSelectPhoto(_apiConfig.photoIds.bright, 'bright');
        }
    }, {
        key: 'handlePhotoSelect',
        value: function handlePhotoSelect(type) {
            this.props.fetchPhotos(type);
            this.props.fetchPlaylist(_apiConfig.playlistIds[type]);
            this.setState({ typeSelected: type });
        }
    }, {
        key: 'handleHomeClick',
        value: function handleHomeClick() {
            console.log('something happened');
            this.setState({ typeSelected: '' });
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'container-fluid full-width-container' },
                !this.state.typeSelected && _react2.default.createElement(_PhotoSelect2.default, { photos: this.props.selectPhotos, handleClick: this.handlePhotoSelect }) || _react2.default.createElement(_Slideshow2.default, { photos: this.props.photos, playlist: this.props.playlist, handleClick: this.handleHomeClick })
            );
        }
    }]);

    return PhotoContainer;
}(_react2.default.Component);

function mapStateToProps(state) {
    return {
        selectPhotos: state.selectPhotos,
        photos: state.photos,
        playlist: state.playlist
    };
}

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)({
        fetchSelectPhoto: _actions.fetchSelectPhoto,
        fetchPhotos: _actions.fetchPhotos,
        fetchPlaylist: _actions.fetchPlaylist
    }, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(PhotoContainer);

/***/ }),

/***/ "./src/components/PhotoContainer/PhotoContainer.scss":
/*!***********************************************************!*\
  !*** ./src/components/PhotoContainer/PhotoContainer.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/PhotoSelect/PhotoSelect.js":
/*!***************************************************!*\
  !*** ./src/components/PhotoSelect/PhotoSelect.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _lodash = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");

__webpack_require__(/*! ./photoSelect.scss */ "./src/components/PhotoSelect/photoSelect.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoSelect = function (_React$Component) {
    _inherits(PhotoSelect, _React$Component);

    function PhotoSelect() {
        _classCallCheck(this, PhotoSelect);

        return _possibleConstructorReturn(this, (PhotoSelect.__proto__ || Object.getPrototypeOf(PhotoSelect)).apply(this, arguments));
    }

    _createClass(PhotoSelect, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'photos-container' },
                this.props.photos && _react2.default.createElement(
                    'div',
                    null,
                    (0, _lodash.map)(this.props.photos, function (photo) {
                        return _react2.default.createElement('div', {
                            className: 'clickable-photo',
                            key: photo.photo.id,
                            style: { backgroundImage: 'url(' + photo.photo.urls.regular + ')' },
                            onClick: function onClick() {
                                return _this2.props.handleClick(photo.type);
                            } });
                    })
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'instructions-container' },
                    _react2.default.createElement(
                        'div',
                        { className: 'instructions' },
                        'Choose the photo that describes your current mood'
                    )
                )
            );
        }
    }]);

    return PhotoSelect;
}(_react2.default.Component);

exports.default = PhotoSelect;

/***/ }),

/***/ "./src/components/PhotoSelect/photoSelect.scss":
/*!*****************************************************!*\
  !*** ./src/components/PhotoSelect/photoSelect.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/components/Slideshow/Slideshow.js":
/*!***********************************************!*\
  !*** ./src/components/Slideshow/Slideshow.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./slideshow.scss */ "./src/components/Slideshow/slideshow.scss");

var _spotify = __webpack_require__(/*! ../../utils/spotify */ "./src/utils/spotify.js");

var _spotify2 = _interopRequireDefault(_spotify);

var _md = __webpack_require__(/*! react-icons/lib/md/ */ "./node_modules/react-icons/lib/md/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Slideshow = function (_React$Component) {
    _inherits(Slideshow, _React$Component);

    function Slideshow(props) {
        _classCallCheck(this, Slideshow);

        var _this = _possibleConstructorReturn(this, (Slideshow.__proto__ || Object.getPrototypeOf(Slideshow)).call(this, props));

        _this.state = {
            currentPhotoIndex: 0,
            paused: true,
            meta: {
                songName: '',
                artist: '',
                album: ''
            }
        };

        _this.incrementSlideshow = _this.incrementSlideshow.bind(_this);
        _this.updateTrackMeta = _this.updateTrackMeta.bind(_this);
        return _this;
    }

    _createClass(Slideshow, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            // Set an interval to increment the slideshow every four seconds
            this.slideshowInterval = setInterval(function () {
                return _this2.incrementSlideshow();
            }, 4000);
            // Update the track meta every half second
            this.trackUpdateInterval = setInterval(function () {
                return _this2.updateTrackMeta();
            }, 500);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            clearInterval(this.slideshowInterval);
            clearTimeout(this.trackUpdateInterval);
        }
    }, {
        key: 'componentDidUpdate',
        value: function componentDidUpdate(prevProps) {
            if (this.props.playlist !== prevProps.playlist) {
                // Once props.playlist is populated, begin the web playback
                _spotify2.default.play(this.props.playlist);
                this.setState({ paused: false });
            }
        }
    }, {
        key: 'updateTrackMeta',
        value: function updateTrackMeta() {
            var rawTrackMeta = _spotify2.default.getPlayerState().track_window.current_track;
            var trackMeta = {
                songName: rawTrackMeta.name,
                artist: rawTrackMeta.artists[0].name,
                album: rawTrackMeta.album.name
            };

            // Update the state if necessary
            if (this.state.meta !== trackMeta) {
                this.setState({ meta: trackMeta });
            }
        }
    }, {
        key: 'incrementSlideshow',
        value: function incrementSlideshow() {
            if (this.state.currentPhotoIndex < this.props.photos.length - 1) {
                this.setState(function (prevState) {
                    return {
                        currentPhotoIndex: prevState.currentPhotoIndex + 1
                    };
                });
            } else {
                // Reset to the beginning of the slideshow
                this.setState({
                    currentPhotoIndex: 0
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            var photo = this.props.photos[this.state.currentPhotoIndex];

            if (!photo) {
                return _react2.default.createElement('div', null);
            }

            return _react2.default.createElement(
                'div',
                { className: 'slideshow-container' },
                _react2.default.createElement(
                    'div',
                    { className: 'slideshow-photo', style: { backgroundImage: 'url(' + photo.urls.regular + ')' } },
                    _react2.default.createElement(
                        'div',
                        { className: 'row pt-4 justify-content-around playback-container' },
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4 align-self-center text-center app-title', onClick: function onClick() {
                                    _spotify2.default.pause();
                                    _this3.props.handleClick();
                                } },
                            'Unsplash Moodboard'
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'col-4 align-self-center text-center' },
                            _react2.default.createElement(
                                'div',
                                { className: 'meta-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'title' },
                                    this.state.meta.songName
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        this.state.meta.artist
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        ' | '
                                    ),
                                    _react2.default.createElement(
                                        'span',
                                        null,
                                        this.state.meta.album
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { className: 'controls-container' },
                                _react2.default.createElement(
                                    'span',
                                    { className: 'controls', onClick: function onClick() {
                                            _spotify2.default.previousTrack();
                                        } },
                                    _react2.default.createElement(_md.MdFastRewind, null)
                                ),
                                this.state.paused && _react2.default.createElement(
                                    'span',
                                    { className: 'controls', onClick: function onClick() {
                                            _spotify2.default.resume();
                                            _this3.setState({ paused: false });
                                        } },
                                    _react2.default.createElement(_md.MdPlayArrow, null)
                                ) || _react2.default.createElement(
                                    'span',
                                    { className: 'controls', onClick: function onClick() {
                                            _spotify2.default.pause();
                                            _this3.setState({ paused: true });
                                        } },
                                    _react2.default.createElement(_md.MdPause, null)
                                ),
                                _react2.default.createElement(
                                    'span',
                                    { className: 'controls', onClick: function onClick() {
                                            _spotify2.default.nextTrack();
                                        } },
                                    _react2.default.createElement(_md.MdFastForward, null)
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return Slideshow;
}(_react2.default.Component);

exports.default = Slideshow;

/***/ }),

/***/ "./src/components/Slideshow/slideshow.scss":
/*!*************************************************!*\
  !*** ./src/components/Slideshow/slideshow.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ "./node_modules/redux-devtools-extension/index.js");

var _middleware = __webpack_require__(/*! ./middleware */ "./src/middleware/index.js");

var _spotify = __webpack_require__(/*! ./utils/spotify */ "./src/utils/spotify.js");

var _spotify2 = _interopRequireDefault(_spotify);

var _PhotoContainer = __webpack_require__(/*! ./components/PhotoContainer/PhotoContainer */ "./src/components/PhotoContainer/PhotoContainer.js");

var _PhotoContainer2 = _interopRequireDefault(_PhotoContainer);

var _reducers = __webpack_require__(/*! ./reducers */ "./src/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
    var middleware = (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_middleware.asyncMiddleware));
    var store = (0, _redux.createStore)(_reducers2.default, middleware);

    // Initialize the web player
    _spotify2.default.initWebPlayer();

    return _react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(_PhotoContainer2.default, null)
        )
    );
};

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById("root"));

/***/ }),

/***/ "./src/middleware/asyncMiddleware.js":
/*!*******************************************!*\
  !*** ./src/middleware/asyncMiddleware.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.asyncAction = undefined;

var _actionTypes = __webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js");

var actionTypes = _interopRequireWildcard(_actionTypes);

var _actions = __webpack_require__(/*! ../actions/actions */ "./src/actions/actions.js");

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var asyncMiddleware = function asyncMiddleware(store) {
    return function (next) {
        return function (action) {
            // Run this for every action that requires async
            if (action.async) {
                action.promise.then(function (value) {
                    store.dispatch(value);
                });
            } else {
                return next(action);
            }
        };
    };
};

var asyncAction = exports.asyncAction = function asyncAction(promise) {
    return {
        type: actionTypes.PROMISE,
        async: true,
        promise: promise
    };
};

exports.default = asyncMiddleware;

/***/ }),

/***/ "./src/middleware/index.js":
/*!*********************************!*\
  !*** ./src/middleware/index.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.asyncMiddleware = undefined;

var _asyncMiddleware = __webpack_require__(/*! ./asyncMiddleware */ "./src/middleware/asyncMiddleware.js");

var _asyncMiddleware2 = _interopRequireDefault(_asyncMiddleware);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.asyncMiddleware = _asyncMiddleware2.default;

/***/ }),

/***/ "./src/reducers/index.js":
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _photos = __webpack_require__(/*! ./photos */ "./src/reducers/photos.js");

var _photos2 = _interopRequireDefault(_photos);

var _selectPhotos = __webpack_require__(/*! ./selectPhotos */ "./src/reducers/selectPhotos.js");

var _selectPhotos2 = _interopRequireDefault(_selectPhotos);

var _playlist = __webpack_require__(/*! ./playlist */ "./src/reducers/playlist.js");

var _playlist2 = _interopRequireDefault(_playlist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
    selectPhotos: _selectPhotos2.default,
    photos: _photos2.default,
    playlist: _playlist2.default
});

/***/ }),

/***/ "./src/reducers/photos.js":
/*!********************************!*\
  !*** ./src/reducers/photos.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = __webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js");

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case ActionTypes.LOAD_PHOTOS:
            return action.payload;

        default:
            return state;
    }
};

/***/ }),

/***/ "./src/reducers/playlist.js":
/*!**********************************!*\
  !*** ./src/reducers/playlist.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _actionTypes = __webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js");

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    switch (action.type) {
        case ActionTypes.LOAD_PLAYLIST:
            return action.payload;

        default:
            return state;
    }
};

/***/ }),

/***/ "./src/reducers/selectPhotos.js":
/*!**************************************!*\
  !*** ./src/reducers/selectPhotos.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _actionTypes = __webpack_require__(/*! ../actions/actionTypes */ "./src/actions/actionTypes.js");

var ActionTypes = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case ActionTypes.LOAD_SELECT_PHOTO:
            return _extends({}, state, _defineProperty({}, action.payload.type, {
                type: action.payload.type,
                photo: action.payload.photo
            }));

        default:
            return state;
    }
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/utils/spotify.js":
/*!******************************!*\
  !*** ./src/utils/spotify.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(/*! ../../config */ "./config.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var clientId = _config.spotifyApiKeys.clientId;
var clientSecret = _config.spotifyApiKeys.clientSecret;
var redirectUri = _config.spotifyApiKeys.redirectURI;
var accessToken = void 0;
var player = void 0;
var playerState = void 0;

var SpotifyUtils = {
    initWebPlayer: function initWebPlayer() {
        SpotifyUtils.authorize();

        window.onSpotifyWebPlaybackSDKReady = function () {
            var token = accessToken;
            player = new Spotify.Player({
                name: 'Moodboard Player',
                getOAuthToken: function getOAuthToken(cb) {
                    cb(token);
                },
                volume: 0.5
            });

            // Error handling
            player.addListener('initialization_error', function (_ref) {
                var message = _ref.message;
                console.error(message);
            });
            player.addListener('authentication_error', function (_ref2) {
                var message = _ref2.message;
                console.error(message);
            });
            player.addListener('account_error', function (_ref3) {
                var message = _ref3.message;
                console.error(message);
            });
            player.addListener('playback_error', function (_ref4) {
                var message = _ref4.message;
                console.error(message);
            });

            // Playback status updates
            player.addListener('player_state_changed', function (state) {
                playerState = state;
            });

            // Ready
            player.addListener('ready', function (_ref5) {
                var device_id = _ref5.device_id;

                console.log('Ready with Device ID', device_id);
            });

            // Not Ready
            player.addListener('not_ready', function (_ref6) {
                var device_id = _ref6.device_id;

                console.log('Device ID has gone offline', device_id);
            });

            // Connect to the player!
            player.connect();
        };
    },
    authorize: function authorize() {
        var url = window.location.href;
        var expirationTime = void 0;

        if (accessToken) {
            // If the user has already been authenticated, return the access token
            return accessToken;
        } else if (url.match(/access_token=([^&]*)/) && url.match(/expires_in=([^&]*)/)) {
            // Pull out the accessToken from the URL
            var match = url.match(/access_token=([^&]*)/);
            accessToken = match[1];
            // Pull out the expirationTime from the URL
            match = url.match(/expires_in=([^&]*)/);
            expirationTime = match[1];

            // Set the accessToken to empty string when time is up
            window.setTimeout(function () {
                return accessToken = '';
            }, expirationTime * 1000);
            // Remove the accessToken in the URL so that we don't try to grab it again
            window.history.pushState('Access Token', null, '/');
        } else {
            // Authenticate the user by redirecting to spotify
            window.location.assign('https://accounts.spotify.com/authorize?client_id=' + clientId + '&response_type=token&scope=streaming%20user-read-birthdate%20user-read-email%20user-read-private&redirect_uri=' + redirectUri);
        }
    },
    getPlaylist: function getPlaylist(playlistId) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var response, jsonResponse;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            SpotifyUtils.authorize();

                            _context.prev = 1;
                            _context.next = 4;
                            return fetch('https://api.spotify.com/v1/users/spotify/playlists/' + playlistId + '/tracks', {
                                headers: { Authorization: 'Bearer ' + accessToken }
                            });

                        case 4:
                            response = _context.sent;

                            if (!response.ok) {
                                _context.next = 14;
                                break;
                            }

                            _context.next = 8;
                            return response.json();

                        case 8:
                            jsonResponse = _context.sent;

                            if (!jsonResponse.items) {
                                _context.next = 13;
                                break;
                            }

                            return _context.abrupt('return', jsonResponse.items.map(function (item) {
                                // return {
                                //     id: item.track.id,
                                //     title: item.track.name,
                                //     artist: item.track.artists[0].name,
                                //     album: item.track.album.name,
                                //     uri: item.track.uri
                                // };
                                return item.track.uri;
                            }));

                        case 13:
                            return _context.abrupt('return', []);

                        case 14:
                            throw new Error('Request failed.');

                        case 17:
                            _context.prev = 17;
                            _context.t0 = _context['catch'](1);

                            console.log(_context.t0);

                        case 20:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[1, 17]]);
        }))();
    },
    play: function play(spotifyUris) {
        SpotifyUtils.authorize();

        // Tell spotify to start playing on the Web Player
        fetch('https://api.spotify.com/v1/me/player/play?device_id=' + player._options.id, {
            method: 'PUT',
            body: JSON.stringify({ uris: spotifyUris }),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + accessToken
            }
        });
    },
    getPlayerState: function getPlayerState() {
        return playerState;
    },
    pause: function pause() {
        player.pause();
    },
    resume: function resume() {
        player.resume();
    },
    previousTrack: function previousTrack() {
        player.previousTrack();
    },
    nextTrack: function nextTrack() {
        player.nextTrack();
    }
};

exports.default = SpotifyUtils;

/***/ }),

/***/ "./src/utils/unsplash.js":
/*!*******************************!*\
  !*** ./src/utils/unsplash.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = __webpack_require__(/*! ../../config */ "./config.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var accessKey = _config.unsplashApiKeys.accessKey;
var secretKey = _config.unsplashApiKeys.secretKey;
var redirectURI = _config.unsplashApiKeys.redirectURI;

var UnsplashUtils = {
    fetchPhotos: function fetchPhotos(queryParam) {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var response, jsonResponse;
            return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            _context.prev = 0;
                            _context.next = 3;
                            return fetch('https://api.unsplash.com/search/photos?query=' + queryParam + '&per_page=50&orientation=landscape', {
                                headers: { Authorization: 'Client-ID ' + accessKey }
                            });

                        case 3:
                            response = _context.sent;

                            if (!response.ok) {
                                _context.next = 10;
                                break;
                            }

                            _context.next = 7;
                            return response.json();

                        case 7:
                            jsonResponse = _context.sent;

                            if (!jsonResponse.results) {
                                _context.next = 10;
                                break;
                            }

                            return _context.abrupt('return', jsonResponse.results);

                        case 10:
                            throw new Error('Photos request failed');

                        case 13:
                            _context.prev = 13;
                            _context.t0 = _context['catch'](0);

                            console.log(_context.t0);

                        case 16:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, _this, [[0, 13]]);
        }))();
    },
    fetchSinglePhoto: function fetchSinglePhoto(id) {
        var _this2 = this;

        return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var response, jsonResponse;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            _context2.prev = 0;
                            _context2.next = 3;
                            return fetch('https://api.unsplash.com/photos/' + id + '?w=675&h=375', {
                                headers: { Authorization: 'Client-ID ' + accessKey }
                            });

                        case 3:
                            response = _context2.sent;

                            if (!response.ok) {
                                _context2.next = 10;
                                break;
                            }

                            _context2.next = 7;
                            return response.json();

                        case 7:
                            jsonResponse = _context2.sent;

                            if (!jsonResponse) {
                                _context2.next = 10;
                                break;
                            }

                            return _context2.abrupt('return', jsonResponse);

                        case 10:
                            throw new Error('Select photos request failed');

                        case 13:
                            _context2.prev = 13;
                            _context2.t0 = _context2['catch'](0);

                            console.log(_context2.t0);

                        case 16:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, _callee2, _this2, [[0, 13]]);
        }))();
    }
};

exports.default = UnsplashUtils;

/***/ }),

/***/ 0:
/*!*******************************************!*\
  !*** multi babel-polyfill ./src/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"./node_modules/babel-polyfill/lib/index.js");
module.exports = __webpack_require__(/*! /Users/cooper/Documents/projects/unsplash-demo/src/index.js */"./src/index.js");


/***/ })

/******/ });
//# sourceMappingURL=main.bundle.js.map