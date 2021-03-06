webpackHotUpdate(0,{

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(140);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoActionSection = function (_React$Component) {
	    _inherits(TodoActionSection, _React$Component);
	
	    function TodoActionSection(props) {
	        _classCallCheck(this, TodoActionSection);
	
	        return _possibleConstructorReturn(this, (TodoActionSection.__proto__ || Object.getPrototypeOf(TodoActionSection)).call(this, props));
	    }
	
	    _createClass(TodoActionSection, [{
	        key: 'handleClick',
	        value: function handleClick() {
	            this.props.deleteTask(this.todoScope, this.props.task);
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _props = this.props,
	                task = _props.task,
	                isCompleted = _props.isCompleted;
	
	
	            var taskStyle = {
	                color: isCompleted ? 'green' : 'red',
	                cursor: 'pointer'
	            };
	            return _react2.default.createElement(
	                'td',
	                null,
	                _react2.default.createElement(
	                    'button',
	                    { onClick: this.handleClick },
	                    'Delete'
	                )
	            );
	        }
	    }]);
	
	    return TodoActionSection;
	}(_react2.default.Component);
	
	exports.default = TodoActionSection;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(246); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "TodoActionSection.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ })

})
//# sourceMappingURL=0.4309eb5c3fc2115efc2d.hot-update.js.map