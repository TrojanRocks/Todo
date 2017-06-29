import React from 'react';
import _ from 'lodash';
import CreateTodo from './create-todo';
import TodosList from './TodosList';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from './TodoAction'

const todos = [
{
    task: 'Redux ke bina Todo',
    isCompleted: false
},
{
    task: 'Practice Saga',
    isCompleted: true
}
];

 class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            todos
        };
        this.deleteTask = this.deleteTask.bind(this);
        this.saveTask = this.saveTask.bind(this);
        this.toggleTask = this.toggleTask.bind(this);
        this.createTask = this.createTask.bind(this);
    }

    render() {
        debugger
        return (
            <div className="app">
            <h1>React ToDos App</h1>
            <br/>
            <CreateTodo todos={this.state.todos} createTask={this.createTask} />
            <TodosList 
            todos={this.state.todos}
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask}
            deleteTask={this.deleteTask}
            />
            </div>
            );
    }

    
    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    createTask(task) {
        let todos = 
            [
                ...this.state.todos, 
                    { task, isCompleted: false } 
            ]

        this.setState({ todos: todos });
    }

    saveTask(oldTask, newTask) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete) {
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}
function mapStateToProps( state ) {
  return {};
}

function mapDispatchToProps( dispatch ) {
  return {};
}

export default connect( mapStateToProps, mapDispatchToProps )( App );
