import React from 'react';
import TodoActionSection from './TodoActionSection';
import TodoTaskSection from './TodoTaskSection';


export default class TodosListItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isEditing: false
        };
    }

    render() {
        const { task, isCompleted } = this.props;
        const taskStyle = {
            color: this.props.isCompleted ? 'green' : 'red',
            cursor: 'pointer',
            textDecoration: !this.props.isCompleted ? 'line-through' : ''
        };
        return (
            <tr className="todo-list__item">
             <td className="todo-list__item-content" style={taskStyle}
                onClick={this.props.toggleTask.bind(this, task)}
            >
                {task}
            </td>
            <td >
                <TodoActionSection task={this.props.task} isCompleted={this.props.isCompleted} deleteTask={this.props.deleteTask}/>
            </td>
            </tr>
        );
    }


    onCancelClick() {
        this.setState({ isEditing: false });
    }

    onSaveClick(event) {
        event.preventDefault();

        const oldTask = this.props.task;
        const newTask = this.refs.editInput.value;
        this.props.saveTask(oldTask, newTask);
        this.setState({ isEditing: false });
    }
}
