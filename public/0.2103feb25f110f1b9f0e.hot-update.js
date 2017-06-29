webpackHotUpdate(0,{

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(140);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _TodoActionSection = __webpack_require__(254);
	
	var _TodoActionSection2 = _interopRequireDefault(_TodoActionSection);
	
	var _TodoTaskSection = __webpack_require__(255);
	
	var _TodoTaskSection2 = _interopRequireDefault(_TodoTaskSection);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodosListItem = function (_React$Component) {
	    _inherits(TodosListItem, _React$Component);
	
	    function TodosListItem(props) {
	        _classCallCheck(this, TodosListItem);
	
	        var _this = _possibleConstructorReturn(this, (TodosListItem.__proto__ || Object.getPrototypeOf(TodosListItem)).call(this, props));
	
	        _this.state = {
	            isEditing: false
	        };
	        return _this;
	    }
	
	    _createClass(TodosListItem, [{
	        key: 'renderActionsSection',
	        value: function renderActionsSection() {
	
	            return _react2.default.createElement(
	                'td',
	                null,
	                _react2.default.createElement(
	                    'button',
	                    { onClick: this.props.deleteTask.bind(this, this.props.task) },
	                    'Delete'
	                )
	            );
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'tr',
	                null,
	                _react2.default.createElement(_TodoActionSection2.default, { task: this.props.task, isCompleted: this.props.isCompleted, deleteTask: this.props.deleteTask }),
	                _react2.default.createElement(_TodoTaskSection2.default, null)
	            );
	        }
	    }, {
	        key: 'onCancelClick',
	        value: function onCancelClick() {
	            this.setState({ isEditing: false });
	        }
	    }, {
	        key: 'onSaveClick',
	        value: function onSaveClick(event) {
	            event.preventDefault();
	
	            var oldTask = this.props.task;
	            var newTask = this.refs.editInput.value;
	            this.props.saveTask(oldTask, newTask);
	            this.setState({ isEditing: false });
	        }
	    }]);
	
	    return TodosListItem;
	}(_react2.default.Component);
	
	exports.default = TodosListItem;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(246); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "todos-list-item.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ })

})
//# sourceMappingURL=0.2103feb25f110f1b9f0e.hot-update.js.map