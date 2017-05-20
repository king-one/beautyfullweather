webpackJsonp([0],{

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var EventEmitter = __webpack_require__(89);
module.exports = new EventEmitter();


/***/ }),

/***/ 190:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});

	if(unacceptedModules.length > 0) {
		console.warn("[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
		unacceptedModules.forEach(function(moduleId) {
			console.warn("[HMR]  - " + moduleId);
		});
	}

	if(!renewedModules || renewedModules.length === 0) {
		console.log("[HMR] Nothing hot updated.");
	} else {
		console.log("[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			console.log("[HMR]  - " + moduleId);
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if(numberIds)
			console.log("[HMR] Consider using the NamedModulesPlugin for module names.");
	}
};


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(84);
module.exports = __webpack_require__(83);


/***/ }),

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SystemItem = function (_React$Component) {
	_inherits(SystemItem, _React$Component);

	function SystemItem() {
		_classCallCheck(this, SystemItem);

		return _possibleConstructorReturn(this, (SystemItem.__proto__ || Object.getPrototypeOf(SystemItem)).apply(this, arguments));
	}

	_createClass(SystemItem, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'tr',
				null,
				_react2.default.createElement(
					'td',
					null,
					this.props.item.info.name
				),
				_react2.default.createElement(
					'td',
					null,
					this.props.item.info.age
				),
				_react2.default.createElement(
					'td',
					null,
					this.props.item.info.id
				),
				_react2.default.createElement(
					'td',
					null,
					this.props.item.info.sex
				),
				_react2.default.createElement(
					'td',
					null,
					_react2.default.createElement(
						'a',
						null,
						'\u5220\u9664'
					),
					_react2.default.createElement(
						'a',
						null,
						'\u8BE6\u60C5'
					)
				)
			);
		}
	}]);

	return SystemItem;
}(_react2.default.Component);

exports.default = SystemItem;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(51);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _systemHeader = __webpack_require__(87);

var _systemHeader2 = _interopRequireDefault(_systemHeader);

var _systemItemPanel = __webpack_require__(88);

var _systemItemPanel2 = _interopRequireDefault(_systemItemPanel);

var _systemFooter = __webpack_require__(86);

var _systemFooter2 = _interopRequireDefault(_systemFooter);

var _systemDetail = __webpack_require__(85);

var _systemDetail2 = _interopRequireDefault(_systemDetail);

var _systemItem = __webpack_require__(52);

var _systemItem2 = _interopRequireDefault(_systemItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var rawData = [{ info: { descrip: '我是一匹来自远方的狼。', sex: '男', age: 20, name: '张三', id: '主任' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '女', age: 21, name: '赵静', id: '学生' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '女', age: 22, name: '王二麻', id: '学生' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '女', age: 24, name: '李晓婷', id: '实习' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '男', age: 23, name: '张春田', id: '实习' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '男', age: 22, name: '刘建国', id: '学生' } }, { info: { descrip: '我是一匹来自远方的狼。', sex: '男', age: 24, name: '张八', id: '主任' } }, { info: { descrip: '我是一匹来自远方的狗。', sex: '男', age: 35, name: '李四', id: '老师' } }, { info: { descrip: '我是一匹来自远方的猪。', sex: '男', age: 42, name: '王五', id: '学生' } }, { info: { descrip: '我是一匹来自远方的牛。', sex: '男', age: 50, name: '赵六', id: '实习' } }, { info: { descrip: '我是一匹来自远方的马。', sex: '男', age: 60, name: '孙七', id: '实习' } }];

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_systemHeader2.default, null),
        _react2.default.createElement(_systemHeader2.default, null),
        _react2.default.createElement(_systemItemPanel2.default, { items: rawData }),
        _react2.default.createElement(_systemFooter2.default, null),
        _react2.default.createElement(_systemDetail2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('content'));

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals window __webpack_hash__ */
if(true) {
	var lastHash;
	var upToDate = function upToDate() {
		return lastHash.indexOf(__webpack_require__.h()) >= 0;
	};
	var check = function check() {
		module.hot.check(true).then(function(updatedModules) {
			if(!updatedModules) {
				console.warn("[HMR] Cannot find update. Need to do a full reload!");
				console.warn("[HMR] (Probably because of restarting the webpack-dev-server)");
				window.location.reload();
				return;
			}

			if(!upToDate()) {
				check();
			}

			__webpack_require__(190)(updatedModules, updatedModules);

			if(upToDate()) {
				console.log("[HMR] App is up to date.");
			}

		}).catch(function(err) {
			var status = module.hot.status();
			if(["abort", "fail"].indexOf(status) >= 0) {
				console.warn("[HMR] Cannot apply update. Need to do a full reload!");
				console.warn("[HMR] " + err.stack || err.message);
				window.location.reload();
			} else {
				console.warn("[HMR] Update failed: " + err.stack || err.message);
			}
		});
	};
	var hotEmitter = __webpack_require__(189);
	hotEmitter.on("webpackHotUpdate", function(currentHash) {
		lastHash = currentHash;
		if(!upToDate() && module.hot.status() === "idle") {
			console.log("[HMR] Checking for updates on the server...");
			check();
		}
	});
	console.log("[HMR] Waiting for update signal from WDS...");
} else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}


/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SystemDetail = function (_React$Component) {
  _inherits(SystemDetail, _React$Component);

  function SystemDetail() {
    _classCallCheck(this, SystemDetail);

    return _possibleConstructorReturn(this, (SystemDetail.__proto__ || Object.getPrototypeOf(SystemDetail)).apply(this, arguments));
  }

  _createClass(SystemDetail, [{
    key: 'render',
    value: function render() {
      var systemDetail = this.props.systemDetail;
      if (!systemDetail) return null;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h4',
          null,
          '\u70B9\u51FB\'\u5B8C\u6210\'\u4FDD\u5B58\u4FEE\u6539,\u70B9\u51FB\'\u5173\u95ED\'\u653E\u5F03\u672A\u4FDD\u5B58\u4FEE\u6539\u5E76\u9000\u51FA.'
        ),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(
          'table',
          { ref: 'editTabel' },
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                '\u59D3\u540D'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement('input', { id: 'staffEditName', type: 'text' })
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                '\u5E74\u9F84'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement('input', { id: 'staffEditAge', type: 'text' })
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                '\u6027\u522B'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'select',
                  { ref: 'selSex', id: 'staffEditSex' },
                  _react2.default.createElement(
                    'option',
                    { value: '\u7537' },
                    '\u7537'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '\u5973' },
                    '\u5973'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                '\u8EAB\u4EFD'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement(
                  'select',
                  { ref: 'selId', id: 'staffEditId' },
                  _react2.default.createElement(
                    'option',
                    { value: '\u4E3B\u4EFB' },
                    '\u4E3B\u4EFB'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '\u8001\u5E08' },
                    '\u8001\u5E08'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '\u5B66\u751F' },
                    '\u5B66\u751F'
                  ),
                  _react2.default.createElement(
                    'option',
                    { value: '\u5B9E\u4E60' },
                    '\u5B9E\u4E60'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'th',
                null,
                '\u4E2A\u4EBA\u63CF\u8FF0'
              ),
              _react2.default.createElement(
                'td',
                null,
                _react2.default.createElement('textarea', { id: 'staffEditDescrip', type: 'text', defaultValue: systemDetail.info.descrip })
              )
            )
          )
        ),
        _react2.default.createElement(
          'p',
          { ref: 'Dtips' },
          '\u4FEE\u6539\u6210\u529F'
        ),
        _react2.default.createElement(
          'p',
          { ref: 'DtipsUnDone' },
          '\u8BF7\u5F55\u5165\u5B8C\u6574\u7684\u4EBA\u5458\u4FE1\u606F'
        ),
        _react2.default.createElement(
          'p',
          { ref: 'DtipsUnAge' },
          '\u8BF7\u5F55\u5165\u6B63\u786E\u7684\u5E74\u9F84'
        ),
        _react2.default.createElement(
          'button',
          null,
          '\u5B8C\u6210'
        ),
        _react2.default.createElement(
          'button',
          null,
          '\u5173\u95ED'
        )
      );
    }
  }]);

  return SystemDetail;
}(_react2.default.Component);

exports.default = SystemDetail;

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SystemFooter = function (_React$Component) {
	_inherits(SystemFooter, _React$Component);

	function SystemFooter() {
		_classCallCheck(this, SystemFooter);

		return _possibleConstructorReturn(this, (SystemFooter.__proto__ || Object.getPrototypeOf(SystemFooter)).apply(this, arguments));
	}

	_createClass(SystemFooter, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h',
					null,
					'\u4EBA\u5458\u65B0\u589E'
				),
				_react2.default.createElement('hr', null),
				_react2.default.createElement(
					'form',
					null,
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							{ htmlFor: 'staffAddName' },
							'\u59D3\u540D'
						),
						_react2.default.createElement('input', { ref: 'addName', id: 'staffAddName', type: 'text', placeholder: 'Your Name' })
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							{ htmlFor: 'staffAddAge' },
							'\u5E74\u9F84'
						),
						_react2.default.createElement('input', { ref: 'addAge', id: 'staffAddAge', type: 'text', placeholder: 'Your Name' })
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							{ htmlFor: 'staffAddName' },
							'\u6027\u522B'
						),
						_react2.default.createElement(
							'select',
							{ ref: 'addSex', id: 'staffAddSex' },
							_react2.default.createElement(
								'option',
								{ value: '\u7537' },
								'\u7537'
							),
							_react2.default.createElement(
								'option',
								{ value: '\u5973' },
								'\u5973'
							)
						)
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							{ htmlFor: 'staffAddId', style: { 'display': 'block' } },
							'\u8EAB\u4EFD'
						),
						_react2.default.createElement(
							'select',
							{ ref: 'addId', id: 'staffAddId' },
							_react2.default.createElement(
								'option',
								{ value: '\u4E3B\u4EFB' },
								'\u4E3B\u4EFB'
							),
							_react2.default.createElement(
								'option',
								{ value: '\u8001\u5E08' },
								'\u8001\u5E08'
							),
							_react2.default.createElement(
								'option',
								{ value: '\u5B66\u751F' },
								'\u5B66\u751F'
							),
							_react2.default.createElement(
								'option',
								{ value: '\u5B9E\u4E60' },
								'\u5B9E\u4E60'
							)
						)
					),
					_react2.default.createElement(
						'p',
						null,
						_react2.default.createElement(
							'label',
							{ htmlFor: 'staffAddDescrip' },
							'\u4E2A\u4EBA\u63CF\u8FF0'
						),
						_react2.default.createElement('textarea', { ref: 'addDescrip', id: 'staffAddDescrip', type: 'text' })
					),
					_react2.default.createElement(
						'p',
						{ ref: 'tips', className: 'tips' },
						'\u63D0\u4EA4\u6210\u529F'
					),
					_react2.default.createElement(
						'p',
						{ ref: 'tipsUnDone', className: 'tips' },
						'\u8BF7\u5F55\u5165\u5B8C\u6574\u7684\u4EBA\u5458\u4FE1\u606F'
					),
					_react2.default.createElement(
						'p',
						{ ref: 'tipsUnAge', className: 'tips' },
						'\u8BF7\u5F55\u5165\u6B63\u786E\u7684\u5E74\u9F84'
					),
					_react2.default.createElement(
						'div',
						null,
						_react2.default.createElement(
							'button',
							null,
							'\u63D0\u4EA4'
						)
					)
				)
			);
		}
	}]);

	return SystemFooter;
}(_react2.default.Component);

exports.default = SystemFooter;

/***/ }),

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SystemHeader = function (_React$Component) {
	_inherits(SystemHeader, _React$Component);

	function SystemHeader() {
		_classCallCheck(this, SystemHeader);

		return _possibleConstructorReturn(this, (SystemHeader.__proto__ || Object.getPrototypeOf(SystemHeader)).apply(this, arguments));
	}

	_createClass(SystemHeader, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(
					'h3',
					{ style: { 'textAlign': 'center' } },
					'\u4EBA\u4E8B\u7BA1\u7406\u7CFB\u7EDF'
				),
				_react2.default.createElement(
					'table',
					{ className: 'header' },
					_react2.default.createElement(
						'tbody',
						null,
						_react2.default.createElement(
							'tr',
							null,
							_react2.default.createElement(
								'td',
								null,
								_react2.default.createElement('input', { type: 'text', placeholder: '\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u641C\u7D22' })
							),
							_react2.default.createElement(
								'td',
								{ className: 'headerTd' },
								_react2.default.createElement(
									'label',
									{ htmlFor: 'idSelect' },
									'\u4EBA\u5458\u7B5B\u9009'
								),
								_react2.default.createElement(
									'select',
									{ id: 'idSelect' },
									_react2.default.createElement(
										'option',
										{ value: '0' },
										'\u5168\u90E8'
									),
									_react2.default.createElement(
										'option',
										{ value: '1' },
										'\u4E3B\u4EFB'
									),
									_react2.default.createElement(
										'option',
										{ value: '2' },
										'\u8001\u5E08'
									),
									_react2.default.createElement(
										'option',
										{ value: '3' },
										'\u5B66\u751F'
									),
									_react2.default.createElement(
										'option',
										{ value: '4' },
										'\u5B9E\u4E60'
									)
								)
							),
							_react2.default.createElement(
								'td',
								null,
								_react2.default.createElement(
									'label',
									{ htmlFor: 'orderSelect' },
									'\u6392\u5217\u65B9\u5F0F'
								),
								_react2.default.createElement(
									'select',
									{ id: 'orderSelect' },
									_react2.default.createElement(
										'option',
										{ value: '0' },
										'\u8EAB\u4EFD'
									),
									_react2.default.createElement(
										'option',
										{ value: '1' },
										'\u5E74\u9F84\u5347'
									),
									_react2.default.createElement(
										'option',
										{ value: '2' },
										'\u5E74\u9F84\u964D'
									)
								)
							)
						)
					)
				)
			);
		}
	}]);

	return SystemHeader;
}(_react2.default.Component);

exports.default = SystemHeader;

/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
     value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _systemItem = __webpack_require__(52);

var _systemItem2 = _interopRequireDefault(_systemItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

{/*该组件用来展示父组件传入的item*/}

var SystemPanel = function (_React$Component) {
     _inherits(SystemPanel, _React$Component);

     function SystemPanel() {
          _classCallCheck(this, SystemPanel);

          return _possibleConstructorReturn(this, (SystemPanel.__proto__ || Object.getPrototypeOf(SystemPanel)).apply(this, arguments));
     }

     _createClass(SystemPanel, [{
          key: 'render',
          value: function render() {
               var items = [];
               if (this.props.items.length == 0) {
                    items.push(_react2.default.createElement(
                         'tr',
                         null,
                         '\u6682\u65E0\u7528\u6237'
                    ));
               } else {
                    this.props.items.forEach(function (item, key) {
                         items.push(_react2.default.createElement(_systemItem2.default, { key: key, item: item }));
                    });
               }
               return _react2.default.createElement(
                    'table',
                    null,
                    _react2.default.createElement(
                         'thead',
                         null,
                         _react2.default.createElement(
                              'tr',
                              null,
                              _react2.default.createElement(
                                   'th',
                                   null,
                                   '\u59D3\u540D'
                              ),
                              _react2.default.createElement(
                                   'th',
                                   null,
                                   '\u5E74\u9F84'
                              ),
                              _react2.default.createElement(
                                   'th',
                                   null,
                                   '\u8EAB\u4EFD'
                              ),
                              _react2.default.createElement(
                                   'th',
                                   null,
                                   '\u6027\u522B'
                              ),
                              _react2.default.createElement(
                                   'th',
                                   null,
                                   '\u64CD\u4F5C'
                              )
                         )
                    ),
                    _react2.default.createElement(
                         'tbody',
                         null,
                         items
                    )
               );
          }
     }]);

     return SystemPanel;
}(_react2.default.Component);

exports.default = SystemPanel;

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ })

},[193]);