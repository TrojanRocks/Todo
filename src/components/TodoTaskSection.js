import React from 'react';

class TodoTaskSection extends React.Component {
	constructor(props) {
        super(props);
    }
    toggleClick() {
    	this.props.toggleTask(this.props.task)
    }
	render(){
		const { task, isCompleted } = this.props;

        const taskStyle = {
            color: isCompleted ? 'green' : 'red',
            cursor: 'pointer',
            textDecoration: !isCompleted ? 'line-through' : ''
        };
        
        
        return (
            <td style={taskStyle}
                onClick={this.toggleClick} >
                {task}
            </td>
        );
	}
       
}

export default TodoTaskSection;