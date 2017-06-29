import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as TodoActions from './TodoAction';

//import './style/style.css'

export default class TodosList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
        this.handleCreate = this.handleCreate.bind(this);
        this.createInput =  this.createInput.bind(this);
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    render() {
        return (
            <div className='search'>
            <form className="form" onSubmit={this.handleCreate}>
                <input type="text" className="form__input" placeholder="What do I need to do?" ref={this.createInput} />
                <button className="btn">Create</button>
                {this.renderError()}
            </form>
            </div>
        );
    }
    createInput( ref ){
        this.input = ref;
    }
    handleCreate(event) {
        event.preventDefault();

        const createInput = this.input;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.input.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Please enter a task.';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }
}
