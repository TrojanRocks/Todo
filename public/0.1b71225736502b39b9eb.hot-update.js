webpackHotUpdate(0,{

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(256), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _lodash = __webpack_require__(249);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _react = __webpack_require__(140);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _todosListHeader = __webpack_require__(252);
	
	var _todosListHeader2 = _interopRequireDefault(_todosListHeader);
	
	var _todosListItem = __webpack_require__(253);
	
	var _todosListItem2 = _interopRequireDefault(_todosListItem);
	
	var _TodoActions = __webpack_require__(345);
	
	var TodoActions = _interopRequireWildcard(_TodoActions);
	
	var _reactRedux = __webpack_require__(346);
	
	var _redux = __webpack_require__(352);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodosList = function (_React$Component) {
	    _inherits(TodosList, _React$Component);
	
	    function TodosList(props) {
	        _classCallCheck(this, TodosList);
	
	        var _this = _possibleConstructorReturn(this, (TodosList.__proto__ || Object.getPrototypeOf(TodosList)).call(this, props));
	
	        _this.onTodoClick = _this.onTodoClick.bind(_this);
	        return _this;
	    }
	
	    _createClass(TodosList, [{
	        key: 'renderItems',
	        value: function renderItems() {
	            var props = _lodash2.default.omit(this.props, 'todos');
	
	            return _lodash2.default.map(this.props.todos, function (todo, index) {
	                return _react2.default.createElement(_todosListItem2.default, _extends({ key: index }, todo, props));
	            });
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'table',
	                null,
	                _react2.default.createElement(_todosListHeader2.default, null),
	                _react2.default.createElement(
	                    'tbody',
	                    { className: 'show-todo' },
	                    this.renderItems()
	                )
	            );
	        }
	    }]);
	
	    return TodosList;
	}(_react2.default.Component);
	
	;
	
	exports.default = TodosList;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(246); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "todos-list.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ })

})
//# sourceMappingURL=0.1b71225736502b39b9eb.hot-update.js.map