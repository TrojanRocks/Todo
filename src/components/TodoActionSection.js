import React from 'react';

class TodoActionSection extends React.Component {
	constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
    	this.props.deleteTask(this.props.task)
    }
   render() {
		const { task, isCompleted } = this.props;

		const taskStyle = {
		    color: isCompleted ? 'green' : 'red',
		    cursor: 'pointer'
		};
   	   return (
            <button  className="todo-list__item-remove" onClick={this.handleClick}>Delete</button>
        );
   }
}

export default TodoActionSection;