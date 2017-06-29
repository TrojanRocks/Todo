import _ from 'lodash';
import React from 'react';
import TodosListHeader from './todos-list-header';
import TodosListItem from './TodosListItem';
import * as TodoActions from './TodoAction';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getVisibleTodos } from './visibleTodoList';

class TodosList extends React.Component {
    constructor( props ) {
        super( props );
        this.renderItems = this.renderItems.bind( this );
  }
    renderItems() {
        const props = _.omit(this.props, 'todos');
        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
    }
    
    render() {
        return (
            <table className="todo-list">
                
                <tbody className="show-todo">
                    {this.renderItems()}
                </tbody>
            </table>
        );
    };
};
function mapStateToProps( state ){
        return{}
}
    function mapDispatchToProps( dispatch ){
        return {
          onTodoClick:bindActionCreators( TodoActions.todoClicked, dispatch )
        };
}

export default connect( mapStateToProps, mapDispatchToProps )( TodosList );