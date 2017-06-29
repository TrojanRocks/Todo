webpackHotUpdate(0,{

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(78), RootInstanceProvider = __webpack_require__(86), ReactMount = __webpack_require__(88), React = __webpack_require__(140); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(140);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _lodash = __webpack_require__(249);
	
	var _lodash2 = _interopRequireDefault(_lodash);
	
	var _createTodo = __webpack_require__(250);
	
	var _createTodo2 = _interopRequireDefault(_createTodo);
	
	var _todosList = __webpack_require__(251);
	
	var _todosList2 = _interopRequireDefault(_todosList);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var todos = [{
	    task: 'Redux ke bina Todo',
	    isCompleted: false
	}, {
	    task: 'Practice Saga',
	    isCompleted: true
	}];
	
	var App = function (_React$Component) {
	    _inherits(App, _React$Component);
	
	    function App(props) {
	        _classCallCheck(this, App);
	
	        var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	        _this.state = {
	            todos: todos
	        };
	        return _this;
	    }
	
	    _createClass(App, [{
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(
	                'div',
	                null,
	                _react2.default.createElement(
	                    'h1',
	                    null,
	                    'React ToDos App'
	                ),
	                _react2.default.createElement('br', null),
	                _react2.default.createElement(_createTodo2.default, { todos: this.state.todos, createTask: this.createTask.bind(this) }),
	                _react2.default.createElement(_todosList2.default, {
	                    todos: this.state.todos,
	                    toggleTask: this.toggleTask.bind(this),
	                    saveTask: this.saveTask.bind(this),
	                    deleteTask: this.deleteTask.bind(this)
	                })
	            );
	        }
	    }, {
	        key: 'toggleTask',
	        value: function toggleTask(task) {
	            var foundTodo = _lodash2.default.find(this.state.todos, function (todo) {
	                return todo.task === task;
	            });
	            foundTodo.isCompleted = !foundTodo.isCompleted;
	            this.setState({ todos: this.state.todos });
	        }
	    }, {
	        key: 'createTask',
	        value: function createTask(task) {
	            this.state.todos.push({
	                task: task,
	                isCompleted: false
	            });
	            this.setState({ todos: this.state.todos });
	        }
	    }, {
	        key: 'saveTask',
	        value: function saveTask(oldTask, newTask) {
	            var foundTodo = _lodash2.default.find(this.state.todos, function (todo) {
	                return todo.task === oldTask;
	            });
	            foundTodo.task = newTask;
	            this.setState({ todos: this.state.todos });
	        }
	    }, {
	        key: 'deleteTask',
	        value: function deleteTask(taskToDelete) {
	            _lodash2.default.remove(this.state.todos, function (todo) {
	                return todo.task === taskToDelete;
	            });
	            this.setState({ todos: this.state.todos });
	        }
	    }]);
	
	    return App;
	}(_react2.default.Component);
	
	exports.default = App;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(246); if (makeExportsHot(module, __webpack_require__(140))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ })

})
//# sourceMappingURL=0.55780e3eb68f8ab3a773.hot-update.js.map